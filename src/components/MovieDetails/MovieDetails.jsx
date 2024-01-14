import { NavLink, Outlet } from 'react-router-dom';
import css from './MovieDetails.module.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDetail = styled(NavLink)`
  display: flex;
  color: black;
  gap: 20px;
  /* text-decoration: none; */

  &.active {
    color: orange;
  }
`;

const MovieDetails = ({ movieDetails }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movieDetails;

  const dateObj = new Date();
  const year = dateObj.getUTCFullYear(release_date);

  return (
    <div className={css.card}>
      <div className={css.about__movie}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
          }
          alt={title}
          width="240"
        />
        <div>
          <h2>
            {title} ({year})
          </h2>

          <p>User Score: {vote_average}</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <ul className={css.genres}>
            {genres?.map(({ id, name }) => {
              return (
                <li key={id} className={css.genre}>
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <h4>Additional information</h4>
      <ul>
        <li>
          <StyledDetail to="cast">Cast</StyledDetail>
        </li>
        <li>
          <StyledDetail to="reviews">Reviews</StyledDetail>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string,
    })
  ),
};

export default MovieDetails;
