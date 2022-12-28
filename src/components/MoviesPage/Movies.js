import { MoviesList } from 'components/MoviesPage/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from './SearchBox';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const handlerQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <SearchBox onSubmit={handlerQueryString} querySearchParams={movieName} />

      <MoviesList movieName={movieName} />
    </div>
  );
}
