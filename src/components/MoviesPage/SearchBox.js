import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit, querySearchParams }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (querySearchParams) {
      setQuery(querySearchParams);
    }
  }, [querySearchParams]);

  const handelChange = e => {
    setQuery(e.target.value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handelChange}></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBox.protoType = {
  onSubmit: PropTypes.func.isRequired,
  querySearchParams: PropTypes.string.isRequired,
};
