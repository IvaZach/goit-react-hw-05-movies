import { MovieDetails } from 'components/MovieDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsApi } from 'services/moviesApi';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(movieId);

  useEffect(() => {
    async function getDetailsMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedDetailsMovie = await movieDetailsApi(movieId);
        console.log(fetchedDetailsMovie);
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
      {loading && <b>Loading data, please wait...</b>}

      {movieDetails && <MovieDetails movieDetails={movieDetails} />}
    </>
  );
}
