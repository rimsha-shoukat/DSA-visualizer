'use client';
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';

export default function login({setLog, setSign}){
    return (
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md bg-white/30 rounded-md">
                <h1 className="text-[2rem] text-blue-800 font-bold">LOGIN</h1>
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" type="email" placeholder="Email" />
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" type="password" placeholder="Password" />
                <button className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2 mt-4">LOGIN</button>
                <div className="flex flex-row items-center justify-between w-[100%] mb-2">
                    <p className="text-red-900 hover:underline">Forgot Password?</p>
                    <p onClick={()=>{ setSign(true); setLog(false);}} className="cursor-default text-blue-900 font-bold">Sign Up</p>
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