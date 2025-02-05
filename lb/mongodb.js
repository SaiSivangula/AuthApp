import mongoose from "mongoose";

export const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
}