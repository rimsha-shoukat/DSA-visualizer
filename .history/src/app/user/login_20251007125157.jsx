'use client';
import { FcGoogle } from "react-icons/fc";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import validator from 'validator';

export default function login({ setLog, setSign }) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [userError, setUserError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const users = [
        {
            'name': 'user',
            'email': 'user@gmail.com',
            'pass': '12345'
        }
    ];

    const handleClick = (e) => {
        e.preventDefault();
        setSign(false);
        setLog(false);
        setEmail('');
        setPass('');
        setEmailError('');
        setPassError('');
        setUserError('');
    }

    const handleFormSubmission = (e) => {
        e.preventDefault();
        setEmailError('');
        setPassError('');
        setUserError('');
        let validEmail = validator.isEmail(email);
        let validUser = users.find(user => user.email === email);
        let validPass = users.find(user => (user.email === email) && (user.pass === pass));
        
       

        if(!validEmail){
            setEmailError('Please enter a valid email address');
        }else{
            if(!validUser){
                setUserError('User does not exist');
            }else{
                if (!validPass){

                }  setPassError('Incorrect email or password');
            }
        }
    }

    return (
        <>
            <div onClick={() => { setSign(false); setLog(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <form onSubmit={(e) => handleFormSubmission(e)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 w-[24rem] max-[470px]:w-[18rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md bg-white/30 rounded-md">
                <h1 className="text-[2rem] text-blue-800 font-bold">LOGIN</h1>
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                {emailError && <p className="text-red-600 text-xs">{emailError}</p>}
                <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    type="password" value={pass} onChange={(e) => setPass(e.target.value)}
                    placeholder="Password" />
                {passError && <p className="text-red-600 text-xs">{passError}</p>}
                {userError && <p className="text-red-600 text-xs">{userError}</p>}
                <button type='submit' className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2 mt-4">LOGIN</button>
                <div className="flex flex-row items-center justify-between w-[100%] mb-2">
                    <p className="text-red-900 hover:underline">Forgot Password?</p>
                    <p onClick={(e) => handleClick(e)} className="cursor-default text-blue-900 font-bold">Sign Up</p>
                </div>
                <h1 className="text-[1.5rem] w-[100%] border-t-2 border-gray-200 text-center">OR</h1>
                <div className="w-[100%] flex flex-row items-center justify-evenly">
                    <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                        <FcGoogle />
                    </button>
                    <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                        <SiLinkedin />
                    </button>
                    <button className="w-[2rem] h-[2rem] p-2 bg-gray-600 rounded-full">
                        <FaGithub />
                    </button>
                </div>
            </form>
        </>
    )
}