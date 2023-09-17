import Image from 'next/image';

export function Header(): JSX.Element {
  return (
    <header className="app-layout pt-8 pb-10 flex justify-center">
      <Image src="/logo.png" alt="Vercel Logo" width={200} height={80} priority />
    </header>
  );
}
