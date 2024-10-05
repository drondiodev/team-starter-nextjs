'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from './icons';

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon
          size={20}
          className="h-5 w-5 text-white transition-all"
          strokeWidth={2}
        />
      ) : (
        <MoonIcon
          size={20}
          className="h-5 w-5 text-slate-800 transition-all"
          strokeWidth={2}
        />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeButton;
