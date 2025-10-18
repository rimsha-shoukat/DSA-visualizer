
export default function Dashboard({setBoard}){
    return(
        <>
            <div onClick={() => { setV(false); }} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300 flex items-center justify-center">
            </div>
            <div className="w-[100%] h-[100%] ">Dashboard</div>
        </>
    )
}