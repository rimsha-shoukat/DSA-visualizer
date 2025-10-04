export default function login(){
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-[24rem] h-auto flex flex-col gap-4 items-center justify-center p-6 backdrop-blur-md inset-0 bg-white/30 rounded-md">
                <h1 className="text-[2rem] text-blue-800 font-bold">LOGIN</h1>
                <input className="rounded-full w-[100%] px-4 py-2 border-2 border-gray-300 focus:outline-none" type="email" placeholder="Email" />
                <input className="rounded-full w-[100%] px-4 py-2 border-2 border-gray-300 focus:outline-none" type="password" placeholder="Password" />
                <button className="rounded-full w-[100%] bg-blue-800 hover:bg-blue-800/30 font-semibold py-2">LOGIN</button>
                <div className="flex flex-row items-center justify-between w-[100%]">
                    <p className="text-red-900 hover:text-underline">Forgot Password?</p>
                    <p className="text-blue-900 fo">Sign Up</p>
                </div>
                <h1>OR</h1>
                <div>
                    <button>G</button>
                    <button>L</button>
                    <button>G</button>
                </div>
                </div>
        </div>
    )
}