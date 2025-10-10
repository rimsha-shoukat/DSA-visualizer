'use client';
import { useState } from 'react';

export default function topicsList({setList}){
    const[error, setError] = useState('');
    const Topics = [
        { id: 1, topic:'lists arrays, queues, heap, graph'},
        { id: 2, topic:'lists 2 arrays, queues, heap, graph'},
        { id: 3, topic:'lists 3 arrays, queues, heap, graph'},
        { id: 4, topic:'lists 4 arrays, queues, heap, graph'},
        { id: 5, topic:'lists 5 arrays, queues, heap, graph'},
        { id: 6, topic:'lists 6 arrays, queues, heap, graph'},
        { id: 7, topic:'lists 7 arrays, queues, heap, graph'},
        { id: 8, topic:'lists 7 arrays, queues, heap, graph'},
        { id: 9, topic:'lists 3 arrays, queues, heap, graph'},
        { id: 10, topic:'lists 6 arrays, queues, heap, graph'},
        { id: 11, topic:'lists 7 arrays, queues, heap, graph'},
        { id: 12, topic:'lists 3 arrays, queues, heap, graph'},
        { id: 13, topic:'lists 3 arrays, queues, heap, graph'},
        { id: 14, topic:'lists 2 arrays, queues, heap, graph'},
        { id: 15, topic:'lists 1 arrays, queues, heap, graph'},
        { id: 16, topic:'lists arrays, queues, heap, graph'},
        { id: 17, topic:'lists 5 arrays, queues, heap, graph'},
        { id: 18, topic:'lists 9 arrays, queues, heap, graph'},
        { id: 19, topic:'lists arrays, queues, heap, graph'},
        { id: 20, topic:'lists 11 arrays, queues, heap, graph'}
    ]

    const[filterTopics, setFilterTopics] = useState(Topics);

    const handleSearch = (query) => {
    console.log(query)
        if(query !== ''){
            let q = query.toLowerCase();
            console.log(q)
            const searchTopics =  Topics.filter((t) =>
            .includes(query.toLowerCase()));
        if (searchTopics.length > 0) {
            setFilterTopics(searchTopics);
            setError('');
        } else {
            setError("No topic Found");
        }
        }
      };
    

    return (
        <>
            <div onClick={()=> setList(false)} className="w-[100%] h-[100%] absolute top-0 left-0 backdrop-blur-md inset-0 transition-all duration-300">
            </div>   
            <div className="w-[24rem] h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-md bg-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-8 p-6">
                <input onChange={(e)=> handleSearch(e.target.value)} className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" placeholder="Search" type="text" />
                {
                    error && <p className="text-red-700 text-sm">{error}</p>
                }
            <div className="flex flex-col gap-2 w-[100%] h-[22rem] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {
                    filterTopics.map((t)=> (
                        <div key={t.id} className="rounded-md bg-[#d9d9d9]/50 dark:bg-[#23364a]/70 hover:bg-[#d9d9d9] dark:hover:bg-[#23364a] p-4 shadow-sm">
                            <h1>{t.topic}</h1>
                        </div>
                    ))
                }
                
                
            </div>
            </div>
        </>
    )
}