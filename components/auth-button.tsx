'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton() {
  const { status } = useSession();

  if (status === 'loading') {
    return <p>Loading ...</p>;
  }

  if (status === 'authenticated') {
    return (
      <button
        className="rounded-xl bg-neutral-500 px-3 py-2 font-medium text-neutral-50 ring-slate-600 duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign Out
      </button>
    );
  }

  return (
    <div>
      <button
        aria-label="Sign in with Google"
        className="inline-flex h-8 w-full items-center justify-center gap-2 rounded-xl bg-neutral-500 px-5 py-3 font-medium text-neutral-50 ring-slate-600 duration-200 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
        type="button"
        onClick={() => signIn('google')}
      >
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
