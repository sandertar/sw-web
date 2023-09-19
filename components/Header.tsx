import Image from 'next/image';
import Link from 'next/link';

export function Header(): JSX.Element {
  return (
    <Link href="/characters">
      <header className="app-layout pt-8 pb-14 flex justify-center">
        <Image src="/logo.png" alt="Vercel Logo" width={200} height={80} priority />
      </header>
    </Link>
  );
}
