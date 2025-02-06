import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Bibliothèque',
      version: '1.0.0',
      description: 'API de gestion de livres pour une bibliothèque'
    },
    servers: [
      { url: 'http://localhost:3000/api' }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: ['./src/routes/*.js'] // Chemin vers vos fichiers de routes
};

const specs = swaggerJsdoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};