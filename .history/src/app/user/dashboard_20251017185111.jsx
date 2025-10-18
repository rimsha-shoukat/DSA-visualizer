'use client';

import { Button } from "@/components/ui/button";

export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-auto top-1/5 left-1/5 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md p-4 flex flex-col gap-4">
                <h1 className="text-[2rem] text-blue-800 font-bold">DASHBOARD</h1>
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <input
                    className="rounded-full w-[50%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    required
                    type="text"
                    placeholder="Name"
                />
                <input
                    className="rounded-full w-[50%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    required
                    type="email"
                    placeholder="Email"
                />
                </div>
                <div className="w-[100%] h-[5rem] border-2 border-blue-800">No Analytics yet!</div>
                <Button size="icon" varient="/>
            </div>
        </>
    )
}