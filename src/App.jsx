import { Routes, Route } from 'react-router-dom';
import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';
import NotFound from 'page/NotFound/NotFound';
import MovieDetailsPage from 'page/MovieDetailsPage/MovieDetailsPage';
import CastPage from 'page/CastPage/CastPage';
import ReviewsPage from 'page/ReviewsPage/ReviewsPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
            
          </Route>

          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
