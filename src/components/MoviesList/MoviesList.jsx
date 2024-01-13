import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';
import styled from 'styled-components';

const StyledName = styled(NavLink)`
  display: flex;
  color: black;
  gap: 20px;
  text-decoration: none;
`;

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <h1 className={css.page__title}>Trending today</h1>
      <ul className={css.list}>
        {movies.map(({ id, poster_path, title }) => {
          return (
            <li key={id} className={css.list__title}>
              <StyledName to={`movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
                  }
                  alt={title}
                  width="40"
                />
                <h3 className={css.title}>{title}</h3>
              </StyledName>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
