import { useState, useEffect } from 'react';
import { FetchMovieTrend } from '../../components/API/Api';
import { useLocation } from 'react-router-dom';
import {
  ImgStyle,
  ItemStyle,
  ListStyle,
  StyleLink,
  TextContent,
  TextTitle,
} from './Home.styled';

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
      <TextTitle>Tranding Day</TextTitle>
      <ListStyle>
        {movieTrends.map(({ id, title, backdrop_path }) => {
          const posters = 'https://image.tmdb.org/t/p/w500' + backdrop_path;
          return (
            <ItemStyle key={id}>
              <StyleLink to={`/movies/${id}`} state={{ from: location }}>
                <ImgStyle src={`${posters}`} alt={title} />
                <TextContent>{`${title}`}</TextContent>
              </StyleLink>
            </ItemStyle>
          );
        })}
      </ListStyle>
    </div>
  );
};
