import { useState, useEffect } from 'react';
import { FetchMovieTrend } from '../../components/API/Api';
import { NavLink, useLocation } from 'react-router-dom';
export const Home = () => {
  const [movieTrends, setMovieTrends] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchMovieTrend(1)
      .then(gallery => {
        setMovieTrends(gallery.results);
      })
      .catch(error => console.log('ERROR'));
  }, []);

  return (
    <div>
      <h1>Tranding Day</h1>
      <ul>
        {movieTrends.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
