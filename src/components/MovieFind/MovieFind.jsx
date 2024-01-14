import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import css from './MovieFind.module.css';

const StyledName = styled(NavLink)`
  color: black;
  
  &.active {
    color: orange;
  }
`;

const MovieFind = ({ movieList }) => {
  return (
    <>
      <hr />
      <ul>
        {movieList.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <StyledName to={`${id}`}><p className={css.original__title}>{original_title}</p></StyledName>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MovieFind.propTypes = {
    movieList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        original_title: PropTypes.string,
        
      })
    ),
  };


export default MovieFind;
