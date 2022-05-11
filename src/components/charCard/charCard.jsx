import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCharById } from '../../services/fetch';

export default function CharCard() {
  const { id } = useParams();
  const [char, setChar] = useState({});
  const history = useHistory('');

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchCharById(id);
      setChar(data);
    };
    fetchCharacter();
  }, [id]);
  //   build in a home button
  const returnHome = async () => {
    history.push('/');
  };

  return (
    <article>
      <img alt="image of character" src={char.image} />
      <h1>{char.name}</h1>
      <p>Species:{char.species}</p>
      <p>Gender:{char.gender}</p>
      <p>Status:{char.status}</p>
      <button onClick={returnHome}>Home</button>
    </article>
  );
}
