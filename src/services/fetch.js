export async function fetchCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await response.json();

  return characters.results;
}

export async function fetchCharById(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const characters = await response.json();

  return characters;
}
