import Searchbar from './searchbar';

export default function topicsList(){
    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div className="w-[24rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-md bg-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-8 p-6">
                <Searchbar to/>
            <div className="flex flex-col gap-2 w-[100%] h-[22rem] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
                <div className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                    <h1>task list number 1 (list name 123)</h1>
                </div>
            </div>
            </div>
        </>
    )
}