import {Router} from 'express'

import {
    importAssets,
    getAssetsByCategory
} from '../controllers/assetsController.js'

const router = Router();
router.get('/:category', getAssetsByCategory);
router.post('/import', importAssets);



export default router