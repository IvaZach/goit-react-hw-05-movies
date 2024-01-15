import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledName = styled(NavLink)`
  color: black;

  &:active {
    color: orange;
  }
`;

const MovieFind = ({ movieList }) => {
  const location = useLocation();

  return (
    <>
      <hr />
      {movieList.length > 0 ? <ul>
        {movieList.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <StyledName to={`${id}`} state={{ from: location }}>
                {original_title}
              </StyledName>
            </li>
          );
        })}
      </ul> : <p>Sorry, nothing was found for your search. Try to change the query</p>  }
      
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
