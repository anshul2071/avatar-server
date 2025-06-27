import Asset from "../models/Asset";
import axios from "axios";
import { downloadAsset } from "../utils/downloadAsset";


const SKETCHFAB_TOKEN = process.env.SKETCHFAB_TOKEN;

export const getAssetsByCategory = async (req, res) => {
    const {category} = req.params;
    try {
        const assets = await Asset.find({category});
        res.json(assets);
    }catch(err) 
    {
        res.status(500).json({error: err.message});
    }
};


export const importAssets = async (req, res) => {
    const {query, category} = req.body;
    try {
        const response = await axios.get('https://api.sketchfab.com/v3/search', {
            headers: {
                Authorization: `Token ${SKETCHFAB_TOKEN}`,
                params: {type: "models", downloadable: true, tags: query, count: 10}
            }
        });

        const results = response.data.results;
        const created = [];
        for(const m of results) {
            const thumb = m.thumbnails.images[0]?.url;
            const dlResp = await axios.get(`https://api.sketchfab.com/v3/models/${m.uid}/download` , {
                header: {
                    Authorization: `Token ${SKETCHFAB_TOKEN}`
                }
            });

        const url = dlResp.data.gltf?.url
        const storagePath = await downloadAsset(url, m.uid);
        const asset = new Asset({
            sourceId: m.uid, name: m.name, category,url, thumbnail: thumb, storagePaht: storagePath
        })

        await asset.save()
        created.push(asset);
    }
    res.json(created);
    }catch(err) 
    {
        res.status(500).json({error: err.message});
    }
};