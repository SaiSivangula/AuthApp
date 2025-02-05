export default function UserInfo() {
    return <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 border-t-4 border-red-400">
            <div>
                Name: <span className="font-bold">Jhon</span>
            </div>
            <div>
                Gmail: <span className="font-bold">Jhon@gmail.com</span>
            </div>
            <button className="bg-red-600 text-white font-bold py-2 px-6 mt-2">Logout</button>
        </div>
    </div>
}