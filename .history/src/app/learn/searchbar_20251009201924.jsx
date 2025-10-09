import { CiSearch } from "react-icons/ci";

export default function searchbar(){
    return (
        <div className="flex flex-row gap-4 items-center justify-center">
        <input className="rounded-full w-[100%] px-4 py-2 border-none ring-2 ring-gray-300 placeholder-gray-700 focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-800" placeholder="Search" type="text" />
        <CiSearch class/>
        </div>
    )
}