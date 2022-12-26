import { APIbyId } from 'API';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import posterNotFound from '../../img/posterNotFound.jpg';
import {
  Btn,
  Link,
  MovieCard,
  Poster,
  WrapInfo,
  WrapMovie,
} from './ItemDetails.styled';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

export default function ItemDetails() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchById() {
      try {
        const response = await APIbyId(id);
        setMovieData(response.data);
      } catch {
        setError(true);
      }
    }
    fetchById();
  }, [id]);

  return (
    <>
      {movieData && (
        <main>
          <Btn to={backLinkHref}> ⬅ Go back</Btn>
          <MovieCard>
            <Poster
              src={
                movieData.poster_path
                  ? BASE_POSTER_URL + movieData.poster_path
                  : posterNotFound
              }
              alt={movieData.title}
            />
            <WrapMovie>
              <h2>
                {movieData.original_title} ({movieData.release_date.slice(0, 4)}
                )
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
            </WrapMovie>
          </MovieCard>
          <WrapInfo>
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
          </WrapInfo>
          <Outlet />
        </main>
      )}
      {error && (
        <div>
          <Btn to={backLinkHref}> ⬅ Back to Home</Btn>
          <p>'Error happened!!!'</p>
        </div>
      )}
    </>
  );
}
