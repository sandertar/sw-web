import { ReactNode } from 'react';

interface Props {
  name: ReactNode;
  birthYear: ReactNode;
  height: ReactNode;
  created: ReactNode;
  isHeader?: boolean;
}

export function ListItem({ name, birthYear, height, created, isHeader }: Props): JSX.Element {
  return (
    <div className={`md:flex py-1 ${!isHeader ? 'hover:bg-blue-500/30 transition-all' : 'text-blue-500'}`}>
      <div className="md:w-1/4 px-4 font-bold">{name}</div>
      <div className="md:w-1/4 px-4">
        <span className="md:hidden">Birth Year: </span>
        <span>{birthYear}</span>
      </div>
      <div className="md:w-1/4 px-4">
        <span className="md:hidden">Height: </span>
        {height}
      </div>
      <div className="md:w-1/4 px-4">
        <span className="md:hidden">Created: </span>
        <span>{created}</span>
      </div>
    </div>
  );
}
