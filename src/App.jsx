import Home from 'page/Home';
import Movies from 'page/Movies';
import NotFound from 'page/NotFound';
import { Routes, Route, NavLink } from 'react-router-dom';
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

export const App = () => {
  return (<>
    <header>
      <nav>
        <ul>
          <li>
          <NavLink to='/movies'>Home</NavLink>
          </li>
          <li>
          <NavLink to='/movies/:moviesId'>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
    


      <Routes>
        <Route path="/movies" element={<Home />} />
        <Route path="/movies/:moviesId" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

/* const BASE_URL = "https://api.themoviedb.org/3/";
const ENDPOINT = "trending/movie/day";
const API_KEY = "ad597f58480ee2b54bd116c59b3fba0a"; */
