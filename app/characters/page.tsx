import { List } from '@/app/characters/components/List';
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
  const data = await getCharacters(page, search);
  return (
    <List characters={data.results} />
  );
}
