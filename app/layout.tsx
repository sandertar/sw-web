import './globals.css';
import type { Metadata } from 'next';
import { Tektur } from 'next/font/google';

import Providers from './providers';

import { Header } from '@/components';

const tektur = Tektur({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Star Wars Character Explorer',
  description: 'Explore the Star Wars universe and learn about your favorite characters.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={tektur.className}>
        <Header />
        <Providers>
          <main className="app-layout">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
