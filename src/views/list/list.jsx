import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/charList/CharList';
import { fetchCharacters } from '../../services/fetch';

export default function List() {
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const resp = await fetchCharacters();
      setCharacter(resp);
      setLoad(false);
    };
    fetchApi();
  }, []);

  if (load) return <h1>loading...</h1>;

  return (
    <>
      <h1> List of Characters</h1>
      <br></br>
      {character.map((char) => (
        <CharacterList key={char.id} char={char} />
      ))}
    </>
  );
}
