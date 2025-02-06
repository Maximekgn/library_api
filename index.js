import express from 'express';
const app = express () ;
import booksRoutes from './routes/books/booksRoute.js';


app.get('/', (req, res) => {
  res.send('Welcome to the library management api'); 
});

app.use('/api', booksRoutes)
