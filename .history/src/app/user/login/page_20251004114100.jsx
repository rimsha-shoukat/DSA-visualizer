export default function login(){
    return (
        <div className="w-[100%] h-[100%] flex justify-center items-center">
            <div className="w-auto h-auto flex flex-col items-center justify-center p-6 backdrop-blur-md inset-0 bg-white/30 rounded-md">
                <h1 className="text-[2rem]">LOGIN</h1>
                <input className="rounded-lg " type="email" placeholder="Email" />
                <input className="rounded-lg" type="password" placeholder="Password" />
                <button>LOGIN</button>
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