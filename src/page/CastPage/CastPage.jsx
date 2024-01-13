import { Case } from 'components/Cast/Cast';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieCastApi } from 'services/moviesApi';
import PropTypes from 'prop-types';

export const CastPage = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedDetailsMovie = await movieCastApi(movieId);
        setMovieCast(fetchedDetailsMovie);
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
      {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
      {loading && <b>Loading movie data, please wait...</b>}
      {!loading && movieCast && <Case movieCast={movieCast} />}
    </>
  );
};

CastPage.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};