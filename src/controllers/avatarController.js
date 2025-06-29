import Avatar from "../models/Avatar.js";




export const saveAvatar = async (req, res) => {
    const {name, composition} = req.body;
    try {
        const avatar = new Avatar ({name, composition});
        await avatar.save();
        res.json(avatar);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
};

export const loadAvatar = async(req, res) => {
    const {id} = req.params;
    try {
        const avatar = await Avatar.findById(id);
        if(!avatar) {
            return res.status(404).json({error: 'Avatar not found'});
        }
        res.json(avatar);
    }catch(err) {
        res.status(500).json({error: err.message});
    }
}