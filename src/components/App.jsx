import { NavLink, Route, Routes } from 'react-router-dom';
import { SearchForm } from './Form/Form';
import { Header } from './Form/Header';
import styled from '@emotion/styled';
import { ListImg } from './Form/ListImg';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orangered;
    background-color: black;
    color: white;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="img">Home</StyledLink>
        <StyledLink to="form">Storig 1</StyledLink>
      </nav>
      <Routes>
        <Route path="form" element={<SearchForm />} />

        <Route path="/img" element={<Header />}>
          <Route path="slow" element={<ListImg />} />
        </Route>
      </Routes>
    </div>
  );
};
