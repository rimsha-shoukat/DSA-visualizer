import {connectDB, user} from '@/database';
import {NextResponse} from 'next/server';

export async function POST(request) {
    try{
        const {username, email, password} = await request.json();
        await connectDB();

        const existingUser = await user.findOne({email});
        if (existingUser) {
            return NextResponse.json({message: 'User already exists'}, {status: 409});
        }

        const newUser = new user({username, email, password});
        await newUser.save();

        return NextResponse.json({message: 'User created successfully'}, {status: 201});
    }
}