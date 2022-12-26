import { APIbyId } from 'API';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import posterNotFound from '../../img/posterNotFound.jpg';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export const ItemDetails = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    async function fetchById() {
      try {
        const response = await APIbyId(id);
        setMovieData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchById();
  }, [id]);

  return (
    <>
      {movieData && (
        <main>
          <img
            src={
              movieData.poster_path
                ? BASE_POSTER_URL + movieData.poster_path
                : posterNotFound
            }
            alt={movieData.title}
          />
          <div>
            <h2>
              {movieData.original_title} ({movieData.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {Math.round(movieData.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <p>
              {movieData.genres
                .map(({ name }) => {
                  return name;
                })
                .join(' ')}
            </p>
            <div>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews" data={id}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Outlet />
        </main>
      )}
    </>
  );
};
