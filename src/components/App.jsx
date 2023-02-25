import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetalies/MovieDetalies';
import { Cast } from '../pages/Caste/Caste';
import { Reviews } from '../pages/Reviews/Reviews';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
 return (
   <div>
     <ToastContainer />
       <nav>
         <Link to="/">Home</Link>
         <Link to="/movies">Movies</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/movies/:movieId" element={<MovieDetails />}>
           <Route path="cast" element={<Cast />} />
           <Route path="reviews" element={<Reviews />} />
         </Route>

         <Route path="*" element={<Home />} />
       </Routes>
   </div>
 );
};
