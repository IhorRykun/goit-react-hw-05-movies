import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const TextTitle = styled.h1`
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 47px;
`;
export const ListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ItemStyle = styled.li`
  padding: 3px;
  gap: 20px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyleLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export const ImgStyle = styled.img`
  width: 450px;
  cursor: pointer;
`;

export const TextContent = styled.p`
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
`;
