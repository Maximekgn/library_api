import express from 'express';
import cors from 'cors';
const app = express();  

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

import booksRoutes from './routes/books/booksRoute.js';
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the library management api'); 
});

app.use('/api', booksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);
});