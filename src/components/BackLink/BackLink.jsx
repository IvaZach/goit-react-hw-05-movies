import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LinkHome = styled(NavLink)`
  margin: 10px auto 10px 50px;
  color: black;

  &active {
    color: orange;
  }
`;

const BackLink = () => {
  return <LinkHome to="">Go back</LinkHome>;
};


export default BackLink;