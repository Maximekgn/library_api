import { Router } from 'express';
import { getAllBooks } from '../controllers/booksController.js';
const router = Router();


router.get('/getAll', getAllBooks);

export default router;