import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
        404 - Page non trouvée
      </h1>
      <p className="my-4 text-gray-500">Cette page semble ne pas exister !</p>
      <Link
        href="/"
        className="text-primary uflex justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      >
        Vers l&apos;accueil
      </Link>
    </section>
  );
}
