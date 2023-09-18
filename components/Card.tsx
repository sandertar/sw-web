import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props): JSX.Element {
  return <div className="bg-blue-500/20 p-4 rounded-lg">{children}</div>;
}
