import express from 'express';
import cors from 'cors';
import { specs, swaggerUi } from './swagger/swagger.js';

const app = express();  

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

import booksRoutes from './routes/books/booksRoute.js';
const port = 3000;

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
  res.send('Welcome to the library management api'); 
});

app.use('/api', booksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port} http://localhost:${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});