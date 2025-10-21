"use server";
import { connectDB, User, Session } from '@/database';  
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Joi from 'joi'; 
import { randomBytes } from 'crypto';

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required',
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing required fields (email, password)' }, { status: 400 });
    }

    const { error, value } = loginSchema.validate(body, { abortEarly: false });
    
    if (error) {
      const messages = error.details.map((detail) => detail.message).join(', ');
      return NextResponse.json({ message: messages }, { status: 400 });
    }

    const { email: validatedEmail, password: validatedPassword } = value;

    await connectDB();

    const user = await User.findOne({ email: validatedEmail });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(validatedPassword, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    const sessionId = randomBytes(32).toString('hex');
    const newSession = new Session({ sessionId, userId: user._id });
    await newSession.save();

    const response = NextResponse.json({ message: 'Login successful!', user: { id: user._id, name: user.name, email: user.email } }, { status: 200 });
    response.cookies.set('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 24 * 60 * 60, 
      path: '/',
    });
    return response;

  } catch (err) {
    return NextResponse.json({ message: 'Error while logging in. Please try again.' }, { status: 500 });
  }
}