import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';

import { Header } from '@/components/Header';

const roboto = Roboto_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="app-layout">{children}</main>
      </body>
    </html>
  );
}
