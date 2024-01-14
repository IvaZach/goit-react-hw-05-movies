import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const LinkHome = styled(NavLink)`
  margin: 10px auto 10px 50px;
  color: black;

  &:active {
    color: orange;
  }
`;

const BackLink = () => {
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  return <LinkHome to={backLinkLocationRef.current}>Go back</LinkHome>;
};

export default BackLink;
