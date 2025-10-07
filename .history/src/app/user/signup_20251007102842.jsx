'use client';
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { SignAuth } from './authentication'

export default function Signup({setLog, setSign}){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[userError, setUserError] = useState('');
    const[emailError, setEmailError] = useState('');
    const[passError, setPassError] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        setLog(true); 
        setSign(false); 
        setName('');
        setEmail('');
        setPass('');
        setEmailError('');
        setUserError('');
        setPassError('');
    }

    const handleFormSubmission = (e) =>{
        e.preventDefault();
        setEmailError('');
        setUserError('');
        setPassError('');
        SignAuth();
    }

    export default async function SignAuth({name, email, pass, setEmailError, setUserError, setPassError, setLog, setSign}){
    const usersCollection = await getCollection('users');
    console.log(usersCollection);
    let validEmail = validator.isEmail(email);
    let validPass = pass.length >= 8;
    let validUser = await usersCollection.findOne({email});
    if(!validEmail) setEmailError('Please enter a valid email address');
    if(!validPass) setPassError('Password must be atleast 8 characters long');
    if(!validUser) setUserError("user already exist");
    
    if(validEmail && validPass && validUser){
        await usersCollection.insertOne({name, email, pass});
        console.log('new user added');
        setName('');
        setEmail('');
        setPass('');
        setSign(false);
        setLog(true);
        setUserError('');
        setEmailError('');
    }
}
    
    return (
        <>
            <div onClick={()=> { setSign(false); setLog(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <form onSubmit={ (e) => handleFormSubmission(e) } className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] max-[470px]:w-[18rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md bg-white/30 rounded-md">
                        <h1 className="text-[2rem] text-blue-800 font-bold">SIGNUP</h1>
                        <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                        value={name} onChange={ (e) => setName(e.target.value) } required
                        type="text" 
                        placeholder="Name" />
                        <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                        value={email} onChange={ (e)=> setEmail(e.target.value) } required
                        type="email" 
                        placeholder="Email" />
                        { emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                        <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                        value={pass} onChange={ (e)=> setPass(e.target.value) } required
                        type="password" 
                        placeholder="Password" />
                        { passError && <p className="text-red-600 text-xs">{passError}</p>}
                        { userError && <p className="text-red-600 text-xs">{userError}</p>}
                        <button type='submit' className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2 mt-4">SIGNUP</button>
                        <div className="flex flex-row items-center justify-between w-[100%] mb-2">
                            <p className="text-red-800">Already have an account?</p>
                            <p onClick={(e) => handleClick(e) } className="cursor-default text-blue-900 font-bold">Log In</p>
                        </div>
                        <h1 className="text-[1.5rem] w-[100%] border-t-2 border-gray-200 text-center">OR</h1>
                        <div className="w-[100%] flex flex-row items-center justify-evenly">
                            <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                                <FcGoogle/>
                            </button>
                            <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                                <SiLinkedin/>
                            </button>
                            <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                                <FaGithub/>
                            </button>
                        </div>
            </form>
        </>
    )
}