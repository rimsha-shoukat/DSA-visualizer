"use server";  // Keep if it's a server action; remove if API route

import { connectDB, User } from '@/database';  // Adjust path as needed
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import Joi from 'joi';  // Import Joi

// Define Joi schema for validation
const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters',
    'string.max': 'Name must be at most 50 characters',
    'any.required': 'Name is required',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Invalid email address',
    'any.required': 'Email is required',
  }),
  pass: Joi.string().min(8).required().messages({
    'string.min': 'Password must be at least 8 characters long',
    'any.required': 'Password is required',
  }),
});

export async function POST(request) {
  try {
    const { name, email, pass } = await request.json();

    // Validate with Joi (replaces validator)
    const { error, value } = signupSchema.validate({ name, email, pass }, { abortEarly: false });
    if (error) {
      // Collect all errors for better UX
      const messages = error.details.map((detail) => detail.message).join(', ');
      return NextResponse.json({ message: messages }, { status: 400 });
    }

    // Use validated values
    const { name: validatedName, email: validatedEmail, pass: validatedPass } = value;

    // Connect to DB
    await connectDB();

    // Hash password
    const hashedPass = await bcrypt.hash(validatedPass, 10);

    // Check for existing user
    const existingUser = await User.findOne({ email: validatedEmail });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const newUser = new User({
      name: validatedName,
      email: validatedEmail,
      pass: hashedPass,
    });
    await newUser.save();

    return NextResponse.json(
      { message: 'Signup successful!', userId: newUser._id },
      { status: 201 }
    );
  } catch (err) {
    console.error('Signup error:', err);
    return NextResponse.json({ message: 'Error while signing up' }, { status: 500 });
  }
}
