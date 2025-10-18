'use client';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-auto absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md p-4 flex flex-col gap-6">
                <h1 className="text-[2rem] text-blue-800 font-bold">DASHBOARD</h1>
                <div className="flex flex-row items-center justify-between w-[100%] gap-4">
                    <Input className="bg-gray-800/50 shadow-sm" type="text" placeholder="rimsha.devs" />
                    <Input className="bg-gray-800/50 shadow-sm" type="email" value="rimsga." />
                </div>
                <div className="w-[100%] h-[5rem] border-2 border-gray-700 shadow-sm p-4 rounded-sm">No Analytics yet!</div>
                <Button  onClick={() =>
                    toast.success("Logged out successfully")
                 } className="bg-red-700 hover:bg-red-900 px-4 py-2" variant="outline">Logout</Button>
            </div>
        </>
    )
}