import axios from 'axios';
const APIkey = '32c4a311ef83ff634434de560e91729a';

export const APItrending = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=32c4a311ef83ff634434de560e91729a'
  );

  return response;
};
