import express from 'express';
import { getAllBooks, getBookById, updateBook, deleteBook, createBook } from '../../controllers/booksControllers.js';
const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books', createBook);

export default router;