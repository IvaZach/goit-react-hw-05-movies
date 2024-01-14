import MovieFind from 'components/MovieFind/MovieFind';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieSearch } from 'services/moviesApi';
import css from './Movies.module.css';

export default function Movies() {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryMovie = searchParams.get('queryMovie') ?? '';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log('queryMovie:', queryMovie);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setLoading(true);
        setError(false);
        const movieList = await movieSearch(queryMovie);
        setMovieList(movieList);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieList();
  }, [queryMovie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const movieValue = form.elements.queryMovie.value;
    if (movieValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ queryMovie: movieValue });

    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="queryMovie" className={css.input__text} />
        <button className={css.button__search}>SEARCH</button>
      </form>

      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading movie data, please wait...</b>}
      {!loading && queryMovie && <MovieFind movieList={movieList} />}
    </>
  );
}
