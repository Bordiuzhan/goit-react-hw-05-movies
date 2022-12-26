import { APIsearch } from 'API';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { Link } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movieName }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    async function fetchSearch() {
      try {
        setIsLoading(true);
        const response = await APIsearch(movieName);
        setMovies(response.data.results);
      } catch {
        toast.error('Error happened!!!');
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearch();
  }, [movieName]);

  return (
    <>
      {isLoading && <RotatingLines />}
      {movieName !== '' && movies.length === 0 && !isLoading && (
        <p>Nothing was found for your request</p>
      )}
      {movies && !isLoading && (
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

MoviesList.protoType = {
  movieName: PropTypes.string.isRequired,
};
