import { APIbyId } from 'API';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import posterNotFound from '../../img/posterNotFound.jpg';

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
        console.log(response.data);
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
          <Link to={backLinkHref}>Back to movies</Link>
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
      {error && (
        <div>
          <Link to={backLinkHref}>Back to Home</Link>
          <p>'Error happened!!!'</p>
        </div>
      )}
    </>
  );
}
