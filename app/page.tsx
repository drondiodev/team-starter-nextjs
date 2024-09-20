import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Lancez votre projet sans effort avec THE Boilerplate Next.js !
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">
          Template de configuration d&apos;un projet Next.Js avec Typescript,
          ESLint, Prettier, Husky, Docker, scopes de commit personnalisés et
          Lint Staged.
        </p>
        <div className="mt-8 flex justify-center gap-x-5 gap-y-3 max-sm:flex-col">
          <Link
            href="#"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
          >
            Vers le template
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border px-8 text-sm font-medium text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            href="https://github.com/drondiodev/nextjs14cicd"
            target="_blank"
            rel="noopener"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 size-5"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Ajouter une étoile sur GitHub
          </Link>
        </div>

        {/* Principales caractéristiques */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Principales caractéristiques
          </h2>
          <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
            <li>
              <strong>Technologies de base :</strong> Next.js 14 avec App
              Router, TypeScript, React
            </li>
            <li>
              <strong>Outils de développement :</strong> ESLint et Prettier,
              Husky et Lint-Staged, Commitizen
            </li>
            <li>
              <strong>Styles :</strong> Tailwind CSS
            </li>
            <li>
              <strong>Déploiement et CI/CD :</strong> Docker, GitHub Actions
            </li>
            <li>
              <strong>Autres fonctionnalités :</strong> Configuration
              personnalisée des scopes de commit, Polices personnalisées,
              Configuration de métadonnées pour le SEO
            </li>
          </ul>
        </div>

        {/* Cible potentielle */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-white">
            Cible potentielle
          </h2>
          <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
            <li>
              <strong>Développeurs React/Next.js :</strong> Démarrage rapide
              avec les meilleures pratiques
            </li>
            <li>
              <strong>Équipes de développement :</strong> Standardisation des
              pratiques et amélioration de la collaboration
            </li>
            <li>
              <strong>Startups et entreprises :</strong> Base solide pour de
              nouveaux projets web
            </li>
            <li>
              <strong>Développeurs freelance :</strong> Point de départ rapide
              pour projets clients
            </li>
          </ul>
        </div>

        {/* Avantages clés */}
        <div className="mt-10">
          <h2 className="mb-4 text-2xl font-bold text-white">Avantages clés</h2>
          <ul className="list-inside list-disc text-left text-gray-600 dark:text-gray-400">
            <li>Gain de temps sur la configuration initiale</li>
            <li>
              Amélioration de la qualité du code grâce aux outils de linting et
              de formatage
            </li>
            <li>
              Facilitation de la collaboration avec des commits standardisés
            </li>
            <li>Préparation pour le déploiement avec Docker</li>
            <li>Intégration continue avec GitHub Actions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
