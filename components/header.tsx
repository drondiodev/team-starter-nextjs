import Link from 'next/link';

import ThemeButton from './theme-button';

export default function Header() {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <Link href="/">Accueil</Link>

        <ThemeButton />
      </nav>
    </header>
  );
}
