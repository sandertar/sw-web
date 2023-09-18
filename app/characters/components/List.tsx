'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { ListItem } from '@/app/characters/components/ListItem';
import { SearchBar } from '@/app/characters/components/SearchBar';
import { Pagination, Skeleton } from '@/components';
import { getCharacters } from '@/services/characters';
import { Character, ListResponse } from '@/types';
import { formatDate, objectToQueryString } from '@/utils';

export function List(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';
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
            router.push(`/characters?search=${s}`);
          }}
          search={search}
        />
      </div>
      <div className="hidden md:block sticky top-0 border-b border-blue-500">
        <ListItem name="Name" birthYear="Birth Year" height="Height" created="Created" isHeader />
      </div>
      {!data?.count && !isFetching && <p className="text-center">No results found</p>}
      {isFetching ? (
        <ul className="mb-4">
          {Array.from(Array(10).keys()).map((i) => (
            <li key={i}>
              <ListItem
                name={<Skeleton className="my-1 w-32" variant={Skeleton.variant.TEXT} />}
                birthYear={<Skeleton className="my-1 w-16" variant={Skeleton.variant.TEXT} />}
                height={<Skeleton className="my-1 w-16" variant={Skeleton.variant.TEXT} />}
                created={<Skeleton className="my-1 w-32" variant={Skeleton.variant.TEXT} />}
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
            router.push(`/characters${objectToQueryString({ page: p.toString(), search })}`);
          }}
          page={page}
          hasNextPage={!!data?.next}
        />
      )}
    </>
  );
}
