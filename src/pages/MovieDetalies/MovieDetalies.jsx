import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieID } from '../../components/API/Api';
import { ContainerFilms, ContainerMovied, LinkStyled } from './MovieDetalies.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    FetchMovieID(movieId)
      .then(setMovie)
      .catch(error => console.log('ERROR'));
  }, [movieId]);

  const imgMovie = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  const backLink = location.state?.from;

  if (!movie.genres) {
    return;
  }

  return (
    <ContainerMovied>
      <LinkStyled to={backLink}>&#8592; Go back</LinkStyled>
      <ContainerFilms>
        <div>
          <img src={imgMovie} alt={movie.original_title} />
          <div>
            <h3>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h3>
            <h5>User score: {movie.vote_average}</h5>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h5>Genres</h5>
            <p>
              {movie.genres.map(({ id, name }) => {
                return <span key={id}> {name}</span>;
              })}
            </p>
          </div>
        </div>
      </ContainerFilms>
      <h4>Additional Information</h4>
      <div>
        <Link to="cast" state={{ from: location.state.from }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state.from }}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </ContainerMovied>
  );
};
