import CONFIG from '@/appconfig';
import { ListResponse, Character } from '@/types';
import { objectToQueryString } from '@/utils/objectToQueryString';

export function getCharacters(page: number, search?: string): Promise<ListResponse<Character>> {
  return fetch(`${CONFIG.API_URL}/people${objectToQueryString({ page, search })}`).then((res) => res.json());
}

export function getCharacter(id: string): Promise<Character> {
  return fetch(`${CONFIG.API_URL}/people/${id}`).then((res) => res.json());
}
