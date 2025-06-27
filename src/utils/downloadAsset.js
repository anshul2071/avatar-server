import { rejects } from 'assert';
import axios from 'axios';
import fs from 'fs';

import path, { resolve } from 'path';



export const downloadAsset = async(downloadUrl, uid) => {
    const res = await axios.get(downloadUrl, {responseType: 'stream'});
    const dir = path.join('uploads', uid);
    if(!fs.existsSync(dir)) 
    {
        fs.mkdirSync(dir, {recursive: true});
    }
    const filePath = path.join(dir, `${uid}.glb`);
    const writer = fs.createWriteStream(filePath);
    res.data.pipe(writer);
    await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
    });

    return filePath;
}