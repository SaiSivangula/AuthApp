import mongoose, { models, Schema } from "mongoose";



const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    
},{timestamps:true})

const User = models.user || mongoose.model("user",userSchema);

export default User;