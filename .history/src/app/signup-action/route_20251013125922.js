"use server";

import { connectDB, User } from '@/database';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Joi from 'joi';  // If using Joi

// Joi schema (updated for 'name' and 'password')
const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.min': 'Name must be at least 2 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(8).required().messages({  // Changed from 'pass'
    'string.min': 'Password must be at least 8 characters',
    'any.required': 'Password is required',
  }),
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;  // Changed 'pass' to 'password'

    // Validate with Joi (optional; skip if not using)
    const { error, value } = signupSchema.validate(body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((detail) => detail.message).join(', ');
      return NextResponse.json({ message: messages }, { status: 400 });
    }

    // Use validated values
    const { name: validatedName, email: validatedEmail, password: validatedPassword } = value || body;

    await connectDB();

    const hashedPassword = await bcrypt.hash(validatedPassword, 10);

    const existingUser = await User.findOne({ email: validatedEmail });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const newUser = new User({
      name: validatedName,
      email: validatedEmail,
      password: hashedPassword,  // Now matches schema
    });
    await newUser.save();

    return NextResponse.json({ message: 'Signup successful!' }, { status: 201 });
  } catch (err) {
    console.error('Signup error:', err);  // Will show detailed DB errors now
    return NextResponse.json({ message: 'Error while signing up' }, { status: 500 });
  }
}
