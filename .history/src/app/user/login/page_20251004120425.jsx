export default function login(){
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-[24rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md inset-0 bg-white/30 rounded-md">
                <h1 className="text-[2rem] text-blue-800 font-bold">LOGIN</h1>
                <input className="rounded-full w-[100%] px-4 py-2 border-2 border-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800" type="email" placeholder="Email" />
                <input className="rounded-full w-[100%] px-4 py-2 border-2 border-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800" type="password" placeholder="Password" />
                <button className="rounded-full w-[100%] bg-blue-800 hover:shadow-md font-semibold py-2">LOGIN</button>
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <p className="text-red-900 hover:underline">Forgot Password?</p>
                    <p className="text-blue-900 font-bold">Sign Up</p>
                </div>
                <h1 className="text-[1.5rem] border-t-2 border-gray-200">OR</h1>
                <div className="w-[100%] flex flex-row items-center justify-evenly">
                    <button className="">G</button>
                    <button className="">L</button>
                    <button className="">G</button>
                </div>
            </div>
        </div>
    )
}