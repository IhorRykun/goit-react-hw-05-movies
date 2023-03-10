import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormStyled = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const InputStyled = styled.input`
  width: 250px;
  height: 32px;
  border-radius: 15px;
  padding-left: 20px;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  height: 36px;
  cursor: pointer;
  background-color: black;
  color: orange;
  margin-left: 5px;
  border-radius: 15px;
  &:hover {
    color: white;
    outline: 2px solid orange;
  }
`;

export const ListStyle = styled.ul`
  list-style: none;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
export const ItemStyle = styled.li`
  margin-top: 10px;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 5px;
`;

export const StyleImg = styled.img`
  width: 450px;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const TextContent = styled.p`
  text-align: center;
  text-align: center;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
`;
