'use client';
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Signup({setLog, setSign}){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[pass, setPass] = useState('');
    const[confirmPass, setConfirmPass] = useState('');
    const user = [];

    const handleFormSubmission = (e) =>{
        e.preventDefault();
        let newUser = {
            'name' : name,
            'email' : email,
            'pass' : pass
        }
        user.push(newUser);
    }
    
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 w-[24rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md bg-white/30 rounded-md">
                <h1 className="text-[2rem] text-blue-800 font-bold">SIGNUP</h1>
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                value={name} 
                type="text" 
                placeholder="Name" />
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                value={email}
                type="email" 
                placeholder="Email" />
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                value={pass}
                type="password" 
                placeholder="Password" />
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" 
                value={confirmPass}
                type="password" 
                placeholder="Confirm Password" />
                <button onClick={ (e) => handleFormSubmission(e) } className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2 mt-4">SIGNUP</button>
                <div className="flex flex-row items-center justify-between w-[100%] mb-2">
                    <p className="text-red-900">Already have an account?</p>
                    <p onClick={() => { setLog(true); setSign(false); }} className="cursor-default text-blue-900 font-bold">Log In</p>
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
            </div>
    )
}