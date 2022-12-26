import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

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
};
