import axios from 'axios';



axios.defaults.baseURL = "https://api.themoviedb.org/3/";
// const ENDPOINT = "trending/movie/day";

// const API_KEY = "ad597f58480ee2b54bd116c59b3fba0a";




const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU5N2Y1ODQ4MGVlMmI1NGJkMTE2YzU5YjNmYmEwYSIsInN1YiI6IjY1M2I3M2M3ZTg5NGE2MDBmZjE1ZTgxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PATEXDjAXr8FrgY0sSY9KkfMU7g5VhiKfIkHgIvk9lY'
  }
};

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


export const moviesApi = async () => {
    const response = await axios.get('trending/movie/day?language=en-US', options);

  return response.data.results;
};


