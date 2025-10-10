import Searchbar from './searchbar';

export default function topicsList({setList}){
    const List=[
        { id: 1, topic:'lists'},
        { id: 2, topic:'lists '},
        { id: 3, topic:'lists'},
        { id: 4, topic:'lists'},
        { id: 5, topic:'lists'},
        { id: 6, topic:'lists'},
        { id: 7, topic:'lists'},
        { id: 8, topic:'lists'},
        { id: 9, topic:'lists'},
        { id: 10, topic:'lists'},
        { id: 11, topic:'lists'},
        { id: 12, topic:'lists'},
        { id: 13, topic:'lists'},
        { id: 14, topic:'lists'},
        { id: 15, topic:'lists'},
        { id: 16, topic:'lists'},
        { id: 17, topic:'lists'},
        { id: 18, topic:'lists'},
        { id: 19, topic:'lists'},
        { id: 20, topic:'lists'},
    ]
    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div className="w-[24rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-md bg-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-8 p-6">
                 <input onChange={(e)=> setTopic(e.target.value)} value={topic} className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" placeholder="Search" type="text" />
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