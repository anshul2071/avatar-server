import mongoose from "mongoose";



const avatarSchema = new mongoose.Schema({
    name: String,
    compostion: Object,
}, {timestamps: true});


export default mongoose.model("Avatar", avatarSchema);