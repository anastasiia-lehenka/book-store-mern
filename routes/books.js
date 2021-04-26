import express from 'express';
import {
    getAllBooks,
    getBookById,
} from '../controllers/books.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();

router.get('/', authMiddleware, getAllBooks);
router.get('/:id', authMiddleware, getBookById);

export default router;
