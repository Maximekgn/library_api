import { exec } from 'child_process';

// Exécute la commande prisma generate
exec('npx prisma generate', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing Prisma Generate: ${error}`);
    return;
  }
  console.log(`Prisma Generate Output: ${stdout}`);
  if (stderr) {
    console.error(`Prisma Generate Errors: ${stderr}`);
  }
}); 