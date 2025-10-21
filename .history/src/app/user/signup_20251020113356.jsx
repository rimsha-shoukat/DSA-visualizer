'use client';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { toast } from "sonner";

export default function Signup({ setLog, setSign }){
    const [form, setForm] = useState({name: "", email: "", password: ""}); 
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false); 

    const handleClick = (e) => {
        e.preventDefault();
        setLog(true);
        setSign(false);
        setMessage('');
        setForm({name:'', email:'', password:''})
        setIsError(false);
    };

    const handleFormSubmission = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsError(false);

        try {
            const res = await fetch('/signup-action', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form), 
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(data.message || 'Signup failed');
                setIsError(true);
                return;
            }

            setMessage(data.message || 'Signup successful!');
            setIsError(false);
            setForm({ name: "", email: "", password: "" });
        } catch (err) {
            setMessage('Network error. Please check your connection.');
            setIsError(true);
        }
        setLog(false);
        setSign(false);
        toast.success("User has been created");
    };

    return (
        <>
            <div onClick={() => { setSign(false); setLog(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] max-[470px]:w-[18rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md bg-white/30 rounded-md">
                <form onSubmit={(e) => handleFormSubmission(e)} className="w-[100%] h-auto flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-[2rem] text-blue-800 font-bold">SIGNUP</h1>
                    <input
                        className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                        value={form.name || ''}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                        value={form.email || ''}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                        value={form.password || ''} 
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        required
                        type="password"
                        placeholder="Password"
                    />
                    {message && (
                        <p className={`text-xs ${isError ? 'text-red-600' : 'text-green-600'}`}>
                            {message}
                        </p>
                    )}
                    <button type="submit" className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2 mt-4">
                        SIGNUP
                    </button>
                    <div className="flex flex-row items-center justify-between w-[100%] mb-2 max-[470px]:text-xs">
                        <p className="text-red-800">Already have an account?</p>
                        <p onClick={(e) => handleClick(e)} className="cursor-default text-blue-900 font-bold">
                            Log In
                        </p>
                    </div>
                </form>
                <span className="w-[100%] shadow-sm border-t-2 border-gray-500"/>
                <button className="mt-4 w-[] flex flex-row px-6 py-2 items-center justify-start gap-3 border-none bg-white dark:bg-black rounded-full hover:shadow-md font-semibold">
                    <FcGoogle className="text-[2rem]" />
                    <h1 className="text-md">Continue with Google</h1>
                </button>
            </div>
        </>
    );
}
