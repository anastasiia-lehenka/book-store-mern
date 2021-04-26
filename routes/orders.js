import express from 'express';
import { createOrder } from '../controllers/orders.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, createOrder);

export default router;
