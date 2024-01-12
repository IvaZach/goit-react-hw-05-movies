import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// const API_KEY = "ad597f58480ee2b54bd116c59b3fba0a";

export const moviesApi = async controllerSignal => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY',
    },
    signal: controllerSignal,
  };

  const response = await axios.get(
    'trending/movie/day?language=en-US',
    options
  );

  return response.data.results;
};
