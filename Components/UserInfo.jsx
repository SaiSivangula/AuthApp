"use client"

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
    const {data: session } = useSession();

    const handleSignOut = () => {
        signOut({ redirect: true, callbackUrl: "/" }); // Redirect to home page after sign out
    };

    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 border-t-4 border-red-400">
            <div>
                Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
                Gmail: <span className="font-bold">{session?.user?.email}</span>
            </div>
            <button onClick={handleSignOut}
              className="bg-red-600 text-white font-bold py-2 px-6 mt-2">Logout</button>
        </div>
    </div>
}