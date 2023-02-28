import { useState, useEffect } from 'react';
import { FetchMovieTrend } from '../../components/API/Api';
import { useLocation } from 'react-router-dom';
import { ItemStyle, ListStyle, StyleLink } from './Home.styled';

export const Home = () => {
  const [movieTrends, setMovieTrends] = useState([]);
 const location = useLocation();
//  const []
// const poster = 'https://image.tmdb.org/t/p/w500' + backdrop_path;
 
 
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
      <ListStyle>
        {movieTrends.map(
          ({
            id,
            title,
            path = 'https://image.tmdb.org/t/p/w500/130H1gap9lFfiTF9iDrqNIkFvC9.jpg',
          }) => {
            return (
              <ItemStyle key={id}>
                <img src={path} alt={title} />
                <StyleLink to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </StyleLink>
              </ItemStyle>
            );
          }
        )}
      </ListStyle>
    </div>
  );
};
