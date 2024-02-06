import express from 'express';
import { getGlobals } from '../controllers/globals.js';
const router = express.Router();

router.get('/', getGlobals);

export default router;