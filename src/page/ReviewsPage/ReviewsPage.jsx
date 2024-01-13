import { Reviews } from 'components/Reviews/Reviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviewsApi } from 'services/moviesApi';
import PropTypes from 'prop-types';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedDetailsMovie = await movieReviewsApi(movieId);
        setReviews(fetchedDetailsMovie);
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
      {!loading && reviews && <Reviews reviews={reviews} />}
    </>
  );
};

ReviewsPage.propTypes = {
  movieId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
