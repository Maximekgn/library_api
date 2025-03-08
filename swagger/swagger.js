import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Déterminer l'URL du serveur de manière dynamique
const serverUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : process.env.RENDER_EXTERNAL_URL 
    ? process.env.RENDER_EXTERNAL_URL 
    : 'http://localhost:3000';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: serverUrl,
        description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
      },
    ],
  },
  apis: [path.join(rootDir, 'routes', '**', '*.js')], // Path absolu pour les API routes
};

const swaggerSpec = swaggerJSDoc(options);

// Configuration des options de Swagger UI
const swaggerOptions = {
  explorer: true,
  customCss: '',
  customSiteTitle: 'Library API Documentation',
  swaggerOptions: {
    defaultModelsExpandDepth: -1, // Cache les modèles par défaut
    docExpansion: 'list' // Affiche la liste des endpoints
  }
};

export { swaggerSpec as specs, swaggerUi }; 