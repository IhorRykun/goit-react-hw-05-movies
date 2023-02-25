import { useState, useEffect } from 'react';
import { FetchMovieTrend } from '../../components/API/Api';
import { NavLink, useLocation } from 'react-router-dom';

export const Home = () => {
  const [movieTrends, setMovieTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchMovieTrend(1)
      .then(gallery => {
        setMovieTrend(gallery.results);
      })
      .catch(error => console.log('error'));
  }, []);
  return (
    <div>
      <h1>Trending Day</h1>
      <ul>
        {movieTrends.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavLink to={`/movie/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
