import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import glob from 'glob';

// Obtenir le chemin du répertoire actuel
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname);

// Fonction pour vérifier si les chemins des API sont correctement résolus
function checkApiPaths() {
  console.log('==== DEBUG: Vérification des chemins API ====');
  console.log('Répertoire racine:', rootDir);
  
  // Vérifier si le dossier routes existe
  const routesDir = path.join(rootDir, 'routes');
  console.log('Répertoire des routes:', routesDir);
  console.log('Le répertoire des routes existe:', fs.existsSync(routesDir));
  
  // Tenter de trouver les fichiers JS dans routes
  try {
    const pattern = path.join(rootDir, 'routes', '**', '*.js');
    console.log('Pattern de recherche:', pattern);
    
    const files = glob.sync(pattern);
    console.log('Fichiers trouvés:', files);
    
    // Vérifier le contenu du premier fichier si disponible
    if (files.length > 0) {
      console.log('Premier fichier trouvé:', files[0]);
      const content = fs.readFileSync(files[0], 'utf8');
      console.log('Contenu (premières 100 caractères):', content.substring(0, 100));
    }
  } catch (error) {
    console.error('Erreur lors de la recherche des fichiers:', error);
  }
  
  console.log('==== DEBUG: Fin de la vérification ====');
}

// Exécuter la vérification
checkApiPaths(); 