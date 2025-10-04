export default function login(){
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-[24rem] h-auto flex flex-col gap-2 items-center justify-center p-6 backdrop-blur-md inset-0 bg-white/30 rounded-md">
                <h1 className="text-[2rem]">LOGIN</h1>
                <input className="rounded-full w-[12rem] px-4 py-2 border-2 border-gray-300 focus:outline-none" type="email" placeholder="Email" />
                <input className="rounded-full w-[12rem] px-4 py-2 border-2 border-gray-300 focus:outline-none" type="password" placeholder="Password" />
                <button className="rounded-full bg-blue-800 font-semibold py-2">LOGIN</button>
                <div>
                    <p>Forgot Password?</p>
                    <p>Sign Up</p>
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