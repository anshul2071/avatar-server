import express from 'express';
import {
    saveAvatar,
    loadAvatar
} from '../controllers/avatarController';


const router = express.Router()

router.post('/', saveAvatar);
router.get('/:id', loadAvatar);

export default router;