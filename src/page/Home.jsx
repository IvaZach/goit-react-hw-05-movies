import { MoviesList } from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { moviesApi } from 'services/moviesApi';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await moviesApi(controller.signal);
        setMovies(fetchedMovies);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getMovies();

    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading data, please wait...</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
