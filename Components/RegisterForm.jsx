"use client"

import Link from "next/link"
import { useState } from "react";


export default function RegisterForm() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

const handleSubmit = async (e)=>{
    e.preventDefault();

    if(!name || !email || !password){
        setError("All fields are necessary");
    }
    try {
        const res = await fetch('api/register',{
            method:"POST",
            headers : {
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name,
                email,
                password,
            }),
        });
        if(res.ok){
            const form = e.target;
            form.reset();
        }
        else{
            console.log("User registeration failed");
        }
    } catch (error) {
        console.log("Error during resignation",error);
    }
}



    return(
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Register</h1>
                <form onSubmit ={handleSubmit}className="flex flex-col gap-3">
                    <input 
                    onChange={(e)=>setName(e.target.value)}
                    type="text" placeholder="Fullname"name="" id="" className="rounded-md"/>
                    <input onChange={(e)=>setEmail(e.target.value)}
                    type="text" placeholder="Email"name="" id="" className="rounded-md"/>
                    <input onChange={(e)=>setPassword(e.target.value)}
                    type="password"  placeholder="password" className="rounded-md"/>
                    <button className="bg-green-700 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
                        Register
                    </button>
                    {error && (
                        <div className=" bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-3">
                        {error}
                        </div>
                    )
                    }

                    <p className ="text-sm mt-3 text-right">Already have a account?
                        <Link className="underline text-green-600 text-bold" href={"/"}>Login</Link>
                    </p>

                </form>
            </div>
        </div>
    );
}