import Searchbar from './searchbar';

export default function topicsList({setList}){
    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div className="w-[24rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-md bg-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6">
            <Searchbar/>
            <div className="flex flex-col gap-2 w-[100%]">
                <div className="bg-wh dark:bg-gray-"></div>
            </div>
            </div>
        </>
    )
}