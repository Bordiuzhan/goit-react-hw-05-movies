import { APIcast } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await APIcast(id);
        console.log(response.data.cast);
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [id]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ profile_path, name, id, character }) => {
            return (
              <li key={id}>
                <img src={BASE_POSTER_URL + profile_path} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
