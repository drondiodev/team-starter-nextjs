import Link from 'next/link';

import ThemeButton from './theme-button';

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-2">
      <nav className="container flex items-center justify-between">
        <Link href="/">Accueil</Link>
        <ThemeButton />
      </nav>
    </header>
  );
}
