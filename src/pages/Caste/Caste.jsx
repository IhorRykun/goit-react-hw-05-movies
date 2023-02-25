import { FetchMovieCastId } from 'components/API/Api';
import { useState } from 'react';
import { useParams, useEffect } from 'react';

export const Cast = () => {
  const [starts, setStart] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieCastId(movieId)
      .then(movie => setStart(movie.cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      <ul>
        {starts.map(({ porfile_path, name, character }) => {
          const startProfile = `https://image.tmdb.org/t/p/w500` + porfile_path;
          return (
            <li key={name}>
              <img src={startProfile} alt={name} />
              <h4>{name}</h4>
              <h4>Character:{character}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
