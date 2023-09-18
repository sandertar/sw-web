import { StarshipCard } from '@/app/characters/components';
import CONFIG from '@/appconfig';
import { Card, Typography } from '@/components';
import { Character, Planet, Species, Starship } from '@/types';

interface Props {
  params: {
    id: string;
  };
}

export default async function CharacterPage({ params: { id } }: Props): Promise<JSX.Element> {
  const character: Character = await fetch(`${CONFIG.API_URL}/people/${id}`).then((res) => res.json());
  const species: Species = await fetch(`${CONFIG.API_URL}/species/${id}`).then((res) => res.json());
  const homeWorld: Planet = await fetch(character.homeworld).then((res) => res.json());
  const starShips: Starship[] = await Promise.all(
    character.starships.map((starship) => fetch(starship).then((res) => res.json())),
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <Card>
          <Typography block variant="h2" highlighted className="italic mb-4 font-bold">
            {character.name}
          </Typography>
          <Typography block>Classification: {species.classification}</Typography>
          <Typography block>Language: {species.language}</Typography>
          <Typography block>Average Lifespan: {species.average_lifespan} years</Typography>
          <Typography block variant="h2" highlighted className="mb-4 mt-6 font-bold">
            Physical Characteristics:
          </Typography>
          <Typography block>Height: {character.height} centimeters</Typography>
          <Typography block>Mass: {character.mass} kilograms</Typography>
          <Typography block>Hair Color: {character.hair_color}</Typography>
          <Typography block>Skin Color: {character.skin_color}</Typography>
          <Typography block>Eye Color: {character.eye_color}</Typography>
          <Typography block variant="h2" highlighted className="mb-4 mt-6 font-bold">
            Biographical Information:
          </Typography>
          <Typography block>Birth Year: {character.birth_year}</Typography>
          <Typography block>Home world: {homeWorld.name}</Typography>
          <Typography block>Gender: {character.gender}</Typography>
        </Card>
      </div>
      <div>
        {/* <h2 className="text-xl font-bold mb-4">Star ships:</h2> */}
        <div className="grid grid-cols-1 gap-4">
          {starShips.map((starship) => (
            <div key={starship.name}>
              <StarshipCard key={starship.name} starship={starship} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function getAllIds(next: string): Promise<string[]> {
  const response = await fetch(next).then((res) => res.json());
  if (response.next) {
    return [
      ...response.results.map((character: Character) => character.url.split('/').at(-2)),
      ...(await getAllIds(response.next)),
    ];
  }
  return response.results.map((character: Character) => character.url.split('/').at(-2));
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const allIds = await getAllIds(`${CONFIG.API_URL}/people`);
  return allIds.map((id) => ({ id }));
}
