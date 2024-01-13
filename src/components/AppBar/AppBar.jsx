import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AppBar.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding-right: 50px;

  &.active {
    color: orange;
  }
`;

export const AppBar = () => {
  return (
    <header>
      <nav className={css.nav}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <hr />
    </header>
  );
};
