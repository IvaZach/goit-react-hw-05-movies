import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsApi } from 'services/moviesApi';
import PropTypes from 'prop-types';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedDetailsMovie = await movieDetailsApi(movieId);
        setMovieDetails(fetchedDetailsMovie);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getDetailsMovie();
  }, [movieId]);

  return (
    <>
      <button>Go back</button>
      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading movie data, please wait...</b>}
      {!loading && movieDetails && <MovieDetails movieDetails={movieDetails} />}
    </>
  );
}

MovieDetailsPage.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
