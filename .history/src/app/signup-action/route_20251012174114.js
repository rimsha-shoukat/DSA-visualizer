import {connectDB, user} from '@/database';
import {NextResponse} from 'next/server';

export async function POST(request) {
    try{
        const {username, email, pass} = await request.json();
        await connectDB();

        const existingUser = await user.findOne({email});
        if (existingUser) {
            return NextResponse.json({message: 'User already exists'}, {status: 409});
        }

        const newUser = new User({username, email, pass});
        await newUser.save();

        return NextResponse.json({message: 'User created successfully'}, {status: 201});
    }catch(err){
        consol
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500});
    }
}