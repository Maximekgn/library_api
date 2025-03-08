import express from 'express';
import cors from 'cors';
import { specs, swaggerUi } from './swagger/swagger.js';

const app = express();  

// Configurer CORS pour permettre les requêtes depuis n'importe quelle origine
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import booksRoutes from './routes/books/booksRoute.js';

// Détecter le port à partir des variables d'environnement ou utiliser 3000 par défaut
const port = process.env.PORT || 3000;

// Définir une route spécifique pour servir le fichier swagger.json
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(specs);
});

// Configurer Swagger UI avec options
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  explorer: true,
  swaggerOptions: {
    url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/swagger.json` : '/swagger.json',
  }
}));

app.get('/', (req, res) => {
  res.send('Welcome to the library management api'); 
});

app.use('/api', booksRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Swagger documentation available at http://localhost:${port}/api-docs`);
});