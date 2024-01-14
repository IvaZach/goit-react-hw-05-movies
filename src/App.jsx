import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('./page/Home/Home'));
const Movies = lazy(() => import('./page/Movies/Movies'));
const NotFound = lazy(() => import('./page/NotFound/NotFound'));
const MovieDetailsPage = lazy(() =>
  import('./page/MovieDetailsPage/MovieDetailsPage')
);
const CastPage = lazy(() => import('./page/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('./page/ReviewsPage/ReviewsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>

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
