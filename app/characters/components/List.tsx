'use client';

import Link from 'next/link';

import { ListItem } from '@/app/characters/components/ListItem';
import { formatDate } from '@/utils/formatDate';
import { Character } from '@/types';

interface Props {
  characters: Character[];
}

export async function List({ characters }: Props): Promise<JSX.Element> {
  return (
    <>
      <div className="hidden md:block sticky top-0 border-b">
        <ListItem name="Name" birthYear="Birth Year" height="Height" created="Created" isHeader />
      </div>
      <ul className="mb-4">
          {(characters || []).map((character) => (
            <li key={character.url}>
              <Link href={`/characters/${character.url.split('/').at(-2)}`}>
                <ListItem
                  name={character.name}
                  birthYear={character.birth_year}
                  height={character.height}
                  created={formatDate(character.created)}
                />
              </Link>
            </li>
          ))}
        </ul>
    </>
  );
}
