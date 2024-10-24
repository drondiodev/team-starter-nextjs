import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React, { Suspense } from 'react';

import GoogleAnalytics from '@/components/GoogleAnalytics';
import Footer from '@/components/footer';
import Header from '@/components/header';

import './globals.css';
import Providers from './providers';
import siteConfig from '@/config/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', preload: true });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'Tailwind CSS',
    'Husky',
    'Lint-Staged',
    'Docker',
    'Google Analytics',
    'NextAuth',
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.links.github,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: 'compte twitter',
  },
  // icons: {
  //   icon: '/favicon.ico',
  //   shortcut: '/favicon-16x16.png',
  //   apple: 'apple-touch-icon.png',
  // },
  // metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col ${inter.className} antialiased`}
      >
        <Providers>
          <Header />
          <main className="grow">
            <Suspense>{children}</Suspense>
          </main>
          <Footer />
        </Providers>
      </body>
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
    </html>
  );
}
