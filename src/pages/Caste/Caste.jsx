import { FetchMovieCastId } from '../../components/API/Api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ItemSyled, ListStyled, StyledImg, TextAuthor } from './Caste.styled';

export const Cast = () => {
  const [stars, setStars] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieCastId(movieId)
      .then(movie => setStars(movie.cast))
      .catch(error => console.log('ERROR'));
  }, [movieId]);

  return (
    <div>
      <ListStyled>
        {stars.map(({ profile_path, name, character }) => {
          const starProfile = 'https://image.tmdb.org/t/p/w500' + profile_path;
          return (
            <ItemSyled key={name}>
              <StyledImg src={starProfile} alt={name} />
              <TextAuthor>{name}</TextAuthor>
              <TextAuthor>Character : {character}</TextAuthor>
            </ItemSyled>
          );
        })}
      </ListStyled>
    </div>
  );
};
