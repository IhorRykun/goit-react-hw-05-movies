import { useState, useEffect } from 'react';
import { FetchMovieTrend } from 'components/API/Api';
import { useLocation } from 'react-router-dom';
import { NavFilmItem} from './Home.styled';

export const Home = () => {
  const [movieTrends, setMovieTrend] = useState([]);
  const location = useLocation();

  useEffect(() => {
    FetchMovieTrend(1).then(gallery => {
      setMovieTrend(gallery.results);
    });
  }, []);
  return (
    <div>
      <h1>Trending Day</h1>
      <ul>
        {movieTrends.map(({ id, title }) => {
          return (
            <li key={id}>
              <NavFilmItem to={`/movie/${id}`} state={{ form: location }}>
                {title}
              </NavFilmItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
