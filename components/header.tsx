// import dynamic from 'next/dynamic';
import Link from 'next/link';

import AuthButton from './auth-button';
import ThemeButton from './theme-button';

// import LoadingIndicator from './loading-indicator';

// const AuthButton = dynamic(() => import('./auth-button'), {
//   loading: () => <LoadingIndicator />,
//   ssr: false,
// });

// const ThemeButton = dynamic(() => import('./theme-button'), {
//   loading: () => <LoadingIndicator />,
//   ssr: false,
// });

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-2">
      <nav className="container flex items-center justify-between">
        <Link href="/">Home</Link>
        <div className="flex gap-2">
          <ThemeButton />
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}
