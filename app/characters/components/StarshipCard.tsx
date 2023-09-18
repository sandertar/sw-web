import { RiSpaceShipFill, RiTeamLine } from 'react-icons/ri';

import { Card } from '@/components/Card';
import { Starship } from '@/types';

interface Props {
  starship: Starship;
}

export function StarshipCard({ starship }: Props): JSX.Element {
  return (
    <Card>
      <p
        className="font-bold text-lg mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-blue-500"
        title={starship.name}
      >
        {starship.name}
      </p>
      <p className="flex items-center space-x-4 whitespace-nowrap">
        <RiSpaceShipFill className="shrink-0" />{' '}
        <span className="min-w-0 overflow-hidden text-ellipsis" title={starship.model}>
          {starship.model}
        </span>
      </p>
      <p className="flex items-center space-x-4 whitespace-nowrap">
        <RiTeamLine className="shrink-0" />
        <span className="min-w-0 overflow-hidden text-ellipsis">{starship.passengers}</span>
      </p>
    </Card>
  );
}
