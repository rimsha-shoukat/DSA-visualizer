'use client';

export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setBoard(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[30rem] h-[30rem] top-1/5 left-1/5 -translate-x-1/2 -translate-y-1/2 bg-white/30 rounded-md backdrop-blur-md"></div>
        </>
    )
}