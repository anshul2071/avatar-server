import mongoose from "mongoose";


const assetSchema = new mongoose.Schema({
    sourceId: String,
    name: String,
    category: String,
    url: String,
    thumbnail: String,
    storagePath: String,
}, {timestamps: true});


export default mongoose.model('Asset', assetSchema);