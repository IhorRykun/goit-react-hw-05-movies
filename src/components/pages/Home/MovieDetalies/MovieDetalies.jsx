import { FetchMovieID } from 'components/API/Api';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useParams, useLocation, NavLink } from 'react-router-dom';

export const MovieDetalies = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    FetchMovieID(movieId)
      .then(setMovie)
      .catch(error => console.log('error'));
  }, [movieId]);

  const imgMovie = `https://image.tmdb.org/t/p/w500` + movie.poster_path;
  const backLink = location.state.form;
  if (!movie.genres) {
    return;
  }

  return (
    <div>
      <link to={backLink}>1234</link>
      <div>
        <img src={imgMovie} alt={movie.original_title} />
        <div>
          <h3>
            {movie.original_title}({movie.release_date.slice(0, 4)})
          </h3>
          <h5>User score: {movie.vote_average}</h5>
          <h3>Overview</h3>
          <p>{movie.Overview}</p>
          <h5>Genres</h5>
          <p>
            {movie.genres.map(({ id, name }) => {
              return <span key={id}>{name}</span>;
            })}
          </p>
        </div>
      </div>
      <h4>Additional Information</h4>
      <NavLink>
        <NavLink to="cast" state={{ form: location.state.form }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ form: location.state.form }}>
          Reviews
        </NavLink>
      </NavLink>
      <Outlet />
    </div>
  );
};
