import { connectMongodb } from "@/lb/mongodb";
import Users from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectMongodb();
        const { email } = await req.json();
        const user = await Users.findOne({ email }).select("_id");
        console.log("user: ",user);
        return NextResponse.json({user});
    } catch (error) {
        console.log(error);
    }
}