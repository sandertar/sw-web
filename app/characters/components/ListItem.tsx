import { ReactNode } from 'react';

import { Typography } from '@/components';

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
      <div className="md:w-1/4 px-4 flex justify-start items-center space-x-2">
        <Typography highlighted variant="bodySm" className="md:hidden">
          Name:{' '}
        </Typography>
        <Typography highlighted={isHeader}>{name}</Typography>
      </div>
      <div className="md:w-1/4 px-4 flex justify-start items-center space-x-2 md:justify-end">
        <Typography highlighted variant="bodySm" className="md:hidden">
          Birth Year:{' '}
        </Typography>
        <Typography highlighted={isHeader}>{birthYear}</Typography>
      </div>
      <div className="md:w-1/4 px-4 flex justify-start items-center space-x-2 md:justify-end">
        <Typography highlighted variant="bodySm" className="md:hidden">
          Height:{' '}
        </Typography>
        <Typography highlighted={isHeader}>{height}</Typography>
      </div>
      <div className="md:w-1/4 px-4 flex justify-start items-center space-x-2 md:justify-end">
        <Typography highlighted variant="bodySm" className="md:hidden">
          Created:{' '}
        </Typography>
        <Typography highlighted={isHeader}>{created}</Typography>
      </div>
    </div>
  );
}
