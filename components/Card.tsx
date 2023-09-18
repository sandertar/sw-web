import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Card({ children }: Props): JSX.Element {
  return <div className="border border-blue-500 p-4 rounded-lg">{children}</div>;
}
