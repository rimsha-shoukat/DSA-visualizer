import { connectToDB, user }  from '@/database';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try{
        const {name, email, pass} = await req.json();
        await connectToDB();
        const existingUser = await user.findOne({email});
        if(existingUser){
            return NextResponse.json({message: "user already exists"}, {status: 400});
        }
        const newUser = new user({name,email, pass});
        await newUser.save();

        return NextResponse.json({message:'Successful!'},{status:400});
    }catch(error){
        console.log('Error',error);
        return NextResponse.json({message: "something went wrong"}, {status:400})
    }
}