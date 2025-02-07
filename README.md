# API de Gestion de Bibliothèque

Une API RESTful pour la gestion de livres, construite avec Node.js et Express.

## Fonctionnalités

- Opérations CRUD pour les livres
- Documentation API avec Swagger
- Configuration par variables d'environnement
- Points d'accès RESTful

## Démarrage

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation

1. Cloner le dépôt
   ```bash
   git clone https://github.com/yourusername/book-management-api.git
   ```
2. Se déplacer dans le répertoire du projet
   ```bash
   cd book-management-api
   ```
3. Installer les dépendances
   ```bash
   npm install
   ```
4. Créer un fichier `.env` basé sur `.env.example`
   ```bash
   cp .env.example .env
   ```
5. Configurer les variables d'environnement dans `.env`

### Lancer l'Application

Démarrer le serveur de développement :

```bash
npm start
```

Accéder à la documentation Swagger :

```bash
http://localhost:3000/api-docs
```

## Routes API

### Livres

- `GET /api/books` : Récupérer tous les livres
- `GET /api/books/:id` : Récupérer un livre par ID
- `POST /api/books` : Créer un nouveau livre
- `PUT /api/books/:id` : Mettre à jour un livre existant
- `DELETE /api/books/:id` : Supprimer un livre

## Technologies Utilisées

- Node.js
- Express
- Prisma
- PostgreSQL
- Swagger
- Cors

## Contributeurs

- [@maximekgn](https://github.com/maximekgn)



