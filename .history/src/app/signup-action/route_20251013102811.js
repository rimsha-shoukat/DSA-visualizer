import {connectDB, User} from '@/database';
import {NextResponse} from 'next/server';
import validator from 'validator';
import bcrypt from 'bcrypt';

export async function POST(request) {
    try{
        const {name, email, pass} = await request.json();
        if(!validator.isEmail(email)) {
            return response.js
        }
        await connectDB();

        const existingUser = await User.findOne({email});
        if (existingUser) {
            return NextResponse.json({message: 'User already exists'}, {status: 409});
        }

        const newUser = new User({name, email, pass});
        await newUser.save();

        return NextResponse.json({message: 'Signup successful!'}, {status: 201});
    }catch(err){
        console.log(err);
        return NextResponse.json({message: 'Error while signing up'}, {status: 500});
    }
}