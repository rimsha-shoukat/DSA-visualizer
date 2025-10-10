import { useState } from 'react'

export default function searchbar() {
    const[topic, setTopic] = useState("");

    return (
        <input onChange={(e)=> setTopic(e.target.value)} value={topic} className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" placeholder="Search" type="text" />
    )
}