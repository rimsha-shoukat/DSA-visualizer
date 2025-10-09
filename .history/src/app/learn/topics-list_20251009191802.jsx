import Searchbar from './searchbar';

export default function topicsList({setList}){
    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div className="flex flex-col items-center justify-center gap-4 p-6">
            <Searchbar/>
            <h1 className="">hello</h1>
            </div>
        </>
    )
}