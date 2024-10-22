# TEAM DEVELOPMENT STARTER KIT

![](https://visitor-badge.laobi.icu/badge?page_id=drondiodev.team-starter-nextjs)

![GitHub last commit](https://img.shields.io/github/last-commit/drondiodev/team-starter-nextjs)
![GitHub forks](https://img.shields.io/github/forks/drondiodev/team-starter-nextjs)
![GitHub Repo stars](https://img.shields.io/github/stars/drondiodev/team-starter-nextjs)
![GitHub watchers](https://img.shields.io/github/watchers/drondiodev/team-starter-nextjs)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

TEAM DEVELOPMENT STARTER KIT est un template Next.js prêt à l'emploi, conçu pour
vous permettre de démarrer rapidement le développement de votre nouvelle
application web en équipe. Il intègre les meilleures pratiques et les dernières
fonctionnalités de Next.js, ainsi que des outils de développement essentiels
pour améliorer votre productivité.

## Fonctionnalités

### Technologies et bibliothèques

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Typescript](https://img.shields.io/badge/Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc)
![React](https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB)

- **Next.js 14** avec App Router : Bénéficiez des dernières fonctionnalités et
  améliorations de performances de Next.js, notamment le nouveau système de mise
  en page (`app/`), le rendu côté serveur et la navigation de fichiers.
- **Typescript** : Un support complet de TypeScript pour un code plus robuste et
  plus facilement maintenable.
- **Tailwind CSS** : Une configuration préconfigurée de Tailwind CSS pour une
  stylisation moderne et réactive de vos composants.
- **ESLint et Prettier** : Des outils de lint et de formatage de code
  préconfigurés pour maintenir une base de code cohérente et lisible.
- **Husky et Lint-Staged** : Des hooks de Git pour exécuter automatiquement les
  vérifications de lint et de formatage avant chaque commit.
- **Docker** : Un outil de conteneurisation pour faciliter le déploiement et la
  gestion des environnements de développement.
- **Zod** : Un schéma de validation de données puissant et simple à utiliser.
- **Google Analytics** : Un outil de suivi des performances pour analyser le
  comportement des utilisateurs et améliorer l'expérience utilisateur.
- **NextAuth.js** : Intégration d'un système d'authentification robuste et
  flexible, permettant une connexion sécurisée via Google.
- **Gestion des variables d'environnement** : Utilisation de
  `@t3-oss/env-nextjs` et Zod pour une validation stricte des variables
  d'environnement, assurant une configuration sécurisée et sans erreur.
- **Composants réutilisables** : Mise en place de composants comme AuthButton et
  ThemeButton pour une interface utilisateur cohérente et facile à maintenir.
- **Gestion des métadonnées** : Configuration avancée des métadonnées pour un
  meilleur référencement (SEO) et partage sur les réseaux sociaux.
- **Gestion des erreurs** : Implémentation d'une page 404 personnalisée pour une
  meilleure expérience utilisateur en cas d'erreur.
- **Templates pour les issues GitHub** : Ajout de templates pour les rapports de
  bugs et les demandes de fonctionnalités, facilitant la contribution et le
  suivi des problèmes.

## Bénéfices

- **Sécurité renforcée** : L'authentification NextAuth.js et la gestion
  sécurisée des variables d'environnement réduisent les risques de failles de
  sécurité.
- **Productivité accrue** : Les composants réutilisables et les outils de
  développement intégrés permettent aux développeurs de se concentrer sur la
  logique métier plutôt que sur la configuration.
- **Meilleure collaboration** : Les templates GitHub et les pratiques de
  développement standardisées facilitent le travail d'équipe et la gestion du
  projet.
- **Expérience utilisateur améliorée** : La gestion des erreurs personnalisée et
  l'interface utilisateur cohérente offrent une meilleure expérience aux
  utilisateurs finaux.
- **Optimisation pour les moteurs de recherche** : La configuration avancée des
  métadonnées améliore la visibilité du site sur les moteurs de recherche et les
  réseaux sociaux.

## Utilisation

1. Clonez le dépôt :

Créer un nouveau repository à part du lien "utiliser ce template" puis

```bash
git clone 'lien de votre nouveau repo'
```

Merci de préférer cette façon de faire, afin de faire connaître le template.

ou

En utilisant `create-next-app` :

```bash
pnpm create next-app  -e https://github.com/drondiodev/team-starter-nextjs ts-pnpm
```

2. Accédez au répertoire du projet :

cd 'nom de votre repo'

3. Installez les dépendances du projet avec pnpm :

```bash
pnpm install
```

4. Démarrez le serveur de développement :

```bash
pnpm dev
```

Votre application Next.js sera alors accessible à l'adresse
http://localhost:3000.

5. Configurez les variables d'environnement :

   - Copiez le fichier `.env.example` en `.env.local`
   - Remplissez les variables GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,
     NEXTAUTH_URL et NEXTAUTH_SECRET avec vos propres valeurs

6. Lancez l'application :

```bash
pnpm dev
```

Votre application Next.js sera alors accessible à l'adresse
http://localhost:3000.

7. Faites vos modifications puis :

```bash
git add -A
pnpm commit
```

Puis laisser vous guider en suivant les instructions dans le terminal

```bash
git push
```
