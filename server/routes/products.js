import express from 'express';
import { getProducts, updateProducts, getProduct, getMetafields } from '../controllers/products.js';
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/:id/metafields', getMetafields);
router.put('/:id', updateProducts);



export default router;