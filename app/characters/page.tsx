import { dehydrate, Hydrate } from '@tanstack/react-query';

import { List } from '@/app/characters/components/List';
import { getQueryClient } from '@/app/getQueryClient';
import { getCharacters } from '@/services/characters';

interface Props {
  searchParams: {
    page: string;
    search: string;
  };
}

export default async function Characters({ searchParams }: Props): Promise<JSX.Element> {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || '';
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['characters', { page, search }], () => getCharacters(page, search));
  const dehydratedState = dehydrate(queryClient);
  return (
    <Hydrate state={dehydratedState}>
      <List searchParams={searchParams} />
    </Hydrate>
  );
}
