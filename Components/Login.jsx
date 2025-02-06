import Link from "next/link";
export default function LoginForm(){
    return(
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Login</h1>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Email"name="" id="" className="rounded-md"/>
                    <input type="password"  placeholder="password" className="rounded-md"/>
                    <button className="bg-green-400 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
                        Login
                    </button>
                    <button className="bg-red-600 text-white rounded-md py-1 px-2 w-fit text-sm">
                        Error message
                    </button>

                    <p className ="text-sm mt-3 text-right">Dont have account?
                        <Link className="underline text-green-600 text-bold" href={"/register"}>Register</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}
