import {Router} from 'express';
import {
    saveAvatar,
    loadAvatar
} from '../controllers/avatarController.js';


const router = Router()

router.post('/', saveAvatar);
router.get('/:id', loadAvatar);

export default router;