import { StarshipCard } from '@/app/characters/components/StarshipCard';
import CONFIG from '@/appconfig';
import { Card } from '@/components/Card';
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
      <div className="col-span-2">
        <Card>
          <p className="italic font-bold text-xl mb-4 text-blue-500">{character.name}</p>
          <p>Classification: {species.classification}</p>
          <p>Language: {species.language}</p>
          <p>Average Lifespan: {species.average_lifespan} years</p>
          <h2 className="text-xl font-bold mt-6 mb-4 text-blue-500">Physical Characteristics:</h2>
          <p>Height: {character.height} centimeters</p>
          <p>Mass: {character.mass} kilograms</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <h2 className="text-xl font-bold mt-6 mb-4 text-blue-500">Biographical Information:</h2>
          <p>Birth Year: {character.birth_year}</p>
          <p>Home world: {homeWorld.name}</p>
          <p>Gender: {character.gender}</p>
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
