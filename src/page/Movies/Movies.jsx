import MovieFind from 'components/MovieFind/MovieFind';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { movieSearch } from 'services/moviesApi';
import css from './Movies.module.css';

export default function Movies() {
  const [movieList, setMovieList] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movieName') ?? '';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log('movie:', movie);

  useEffect(() => {
    async function fetchMovieList() {
      try {
        setLoading(true);
        setError(false);
        const movieList = await movieSearch(movie);
        setMovieList(movieList);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieList();
  }, [movie]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ movieName: form.elements.movieName.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="movieName" className={css.input__text} />
        <button className={css.button__search}>SEARCH</button>
      </form>

      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading movie data, please wait...</b>}
      {!loading && movie && <MovieFind movieList={movieList} />}
    </>
  );
}
