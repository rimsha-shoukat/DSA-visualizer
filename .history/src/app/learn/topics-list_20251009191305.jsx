import Searchbar from './searchbar';

export default function topicsList({setList}){
    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div>
            <Searchbar/>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md p-6 rounded-md bg-white/30 transition-all duration-300">hello</h1>
            </div>
        </>
    )
}