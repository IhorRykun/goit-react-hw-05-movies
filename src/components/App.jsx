import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movie/Movie';
import { MovieDetalies } from '../pages/MovieDetalies/MovieDetalies';
import { Cast } from '../pages/Caste/Caste';
import { Reviews } from '../pages/Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <Navlink to="/movies">Movies</Navlink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetalies />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
