import { APIsearch, APItrending } from 'API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

export const MoviesList = ({ movieName }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function fetchSearch() {
      try {
        const response = await APIsearch(movieName);
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearch();
  }, [movieName]);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ original_title, id }) => {
            console.log();
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
