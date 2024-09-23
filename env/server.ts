import { createEnv } from '@t3-oss/env-nextjs';
import { ZodError, z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']),
    //exemple avec l'url de la DB
    // DATABASE_URL: z.string().url(),
  },
  onValidationError: (error: ZodError) => {
    console.error("❌ Variables d'environnement invalides :");
    const errors = error.flatten().fieldErrors;

    for (const [key, value] of Object.entries(errors)) {
      if (value) {
        console.error(`- ${key}: ${value.join(', ')}`);
      } else {
        console.error(`- ${key}: valeur non définie`);
      }
    }

    console.error(`
  Veuillez vérifier les variables d'environnement suivantes :

  1. Assurez-vous que toutes les variables requises sont définies dans votre fichier .env.
  2. Vérifiez que les valeurs des variables respectent les formats attendus (par exemple, DATABASE_URL doit être une URL valide).
  3. Si vous utilisez des chaînes vides, assurez-vous qu'elles sont correctement gérées selon vos besoins.

  Pour plus d'informations, consultez la documentation ou contactez votre équipe de développement.
  `);

    process.exit(1);
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: process.env,
});
