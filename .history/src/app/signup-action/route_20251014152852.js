"use server";

import { connectDB, User } from '@/database';  
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Joi from 'joi'; 

const signupSchema = Joi.object({
  name: Joi.string().min(2).max(30).required().messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name must be at most 50 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({  // Fixed: 'password' not 'pass'
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required',
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;  // Fixed: 'password' not 'pass'

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields (name, email, password)' }, { status: 400 });
    }

    // Validate with Joi (replaces validator; more comprehensive)
    const { error, value } = signupSchema.validate(body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((detail) => detail.message).join(', ');
      return NextResponse.json({ message: messages }, { status: 400 });
    }

    // Use validated values
    const { name: validatedName, email: validatedEmail, password: validatedPassword } = value;

    // Connect to DB (now robust)
    await connectDB();

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedPassword, 10);

    // Check existing user
    const existingUser = await User.findOne({ email: validatedEmail });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Create and save (fields now match schema)
    const newUser = new User({
      name: validatedName,
      email: validatedEmail,
      password: hashedPassword,  // Fixed: 'password' not 'pass'
    });
    await newUser.save();

    return NextResponse.json({ message: 'Signup successful!' }, { status: 201 });
  } catch (err) {
    console.error('Signup error details:', err.message || err);  // Logs full error (e.g., DB connection/auth issues)
    return NextResponse.json({ message: 'Error while signing up. Please try again.' }, { status: 500 });
  }
}
