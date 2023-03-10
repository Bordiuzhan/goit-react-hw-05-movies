import { APIcast } from 'API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import castPhoto from '../../img/castPhoto.jpeg';
import { Img, Item, List } from './Cast.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await APIcast(id);
        setCast(response.data.cast);
      } catch (error) {
        toast.error('Error happened!!!');
      }
    }
    fetchCast();
  }, [id]);

  return (
    <>
      {cast && (
        <List>
          {cast.map(({ profile_path, name, id, character }) => {
            return (
              <Item key={id}>
                <Img
                  src={
                    profile_path ? BASE_POSTER_URL + profile_path : castPhoto
                  }
                  alt={name}
                />
                <p>{name}</p>
                <span>Character: {character}</span>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
}
