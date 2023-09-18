'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useState } from 'react';

import { ListItem } from '@/app/characters/components/ListItem';
import { SearchBar } from '@/app/characters/components/SearchBar';
import { Pagination } from '@/components/Pagination';
import { Skeleton } from '@/components/Skeleton';
import { getCharacters } from '@/services/characters';
import { Character, ListResponse } from '@/types';
import { formatDate } from '@/utils/formatDate';
import { shallowNavigate } from '@/utils/shallowNavigate';

interface Props {
  searchParams: {
    search?: string;
    page?: string;
  };
}

export function List({ searchParams }: Props): JSX.Element {
  const [search, setSearch] = useState(searchParams.search || '');
  const [page, setPage] = useState(Number(searchParams.page) || 1);
  const queryKey = ['characters', { page, search }];
  const { data, isFetching } = useQuery<ListResponse<Character>>({
    queryKey,
    queryFn: () => getCharacters(page, search),
    keepPreviousData: true,
  });
  return (
    <>
      <div className="mb-8">
        <SearchBar
          onChange={(s): void => {
            setPage(1);
            setSearch(s);
            shallowNavigate(window.location.pathname, { search: s });
          }}
          search={search}
        />
      </div>
      <div className="hidden md:block sticky top-0 border-b">
        <ListItem name="Name" birthYear="Birth Year" height="Height" created="Created" isHeader />
      </div>
      {!data?.count && !isFetching && <p className="text-center">No results found</p>}
      {isFetching ? (
        <ul className="mb-4">
          {Array.from(Array(10).keys()).map((i) => (
            <li key={i}>
              <ListItem
                name={<Skeleton className="my-1" variant={Skeleton.variant.TEXT} />}
                birthYear={<Skeleton className="my-1 w-1/3" variant={Skeleton.variant.TEXT} />}
                height={<Skeleton className="my-1 w-1/3" variant={Skeleton.variant.TEXT} />}
                created={<Skeleton className="my-1" variant={Skeleton.variant.TEXT} />}
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="mb-4">
          {(data?.results || []).map((character) => (
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
      )}
      {!!data?.count && (
        <Pagination
          isDisabled={isFetching}
          onChange={(p): void => {
            setPage(p);
            shallowNavigate(window.location.pathname, { search, page: p });
          }}
          page={Number(page)}
          hasNextPage={!!data?.next}
        />
      )}
    </>
  );
}
