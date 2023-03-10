import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  padding: 20px;
  border-bottom: 2px solid black;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 55px;
  margin-left: 10px;
  color: black;
  text-decoration: none;
  &.active {
    color: darkorange;
  }
`;

export const Container = styled.div`
  padding: 10px;
`;
