import axios from 'axios';
const APIkey = '32c4a311ef83ff634434de560e91729a';

export const APItrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${APIkey}`
  );

  return response;
};

export const APIsearch = async data => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&query=${data}`
  );
  return response;
};

export const APIbyId = async data => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data}?api_key=${APIkey}&language=en-US`
  );
  return response;
};
export const APIreviews = async data => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data}/reviews?api_key=${APIkey}&language=en-US&page=1`
  );
  return response;
};
export const APIcast = async data => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data}/credits?api_key=${APIkey}&language=en-US`
  );
  return response;
};
