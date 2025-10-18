'use client';

export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-[30rem] top-1/5 left-1/5 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md p-4 flex flex-col gap-4">
                <h1 className="text-[2rem] text-blue-800 font-bold">DASHBOARD</h1>
                <div className="flex flex-row items-center justify-center w-[100%]">
                    inpu
                </div>
                
            </div>
        </>
    )
}