"use client";
import { CiEdit } from "react-icons/ci";

export default async function Dashboard({setBoard}){

    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md p-6 flex flex-col gap-6">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="text-[2rem] text-blue-800 font-bold">DASHBOARD</h1>
                    <CiEdit className="cursor-pointer hover:text-blue-800" />
                </div>
                <div className="flex flex-row items-center w-[100%] gap-4">
                    <input className="rounded-sm px-2 py-[0.2rem] text-sm border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    type="text" disabled
                    value={user.name} />
                    <input className="rounded-sm px-2 py-[0.2rem] text-sm border-none ring-2 ring-gray-300 shadow-md placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800"
                    type="email" disabled
                    value={user.email} />
                </div>
                <div className="w-[100%] h-[5rem] text-blue-700 shadow-sm p-4 rounded-md">Analytics graph will be there</div>
                <div className="flex flex-row items-center justify-between gap-2">
                    <button className="rounded-md bg-blue-800 hover:shadow-md font-semibold py-2 px-4">Delete Account</button>
                    <button className="rounded-md bg-red-600 hover:shadow-md font-semibold py-2 px-4">Logout</button>
                </div>
            </div>
        </>
    )
}