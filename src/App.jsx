import MovieDetails from 'page/MovieDetailsPage';
import Home from 'page/Home';
import Movies from 'page/Movies';
import NotFound from 'page/NotFound';
import { Routes, Route } from 'react-router-dom';

import { AppBar } from 'components/AppBar';



export const App = () => {
  return (
    <>
      <AppBar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/* const BASE_URL = "https://api.themoviedb.org/3/";
const ENDPOINT = "trending/movie/day";
const API_KEY = "ad597f58480ee2b54bd116c59b3fba0a"; */
