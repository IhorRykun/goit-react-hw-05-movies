import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSearchQuery } from '../../components/API/Api';
import Notiflix from 'notiflix';

export const Movies = () => {
  const [filmSearch, setFilmSearch] = useState('');
  const [filmSearchGallery, setFilmSearchGallery] = useState([]);
  const [filmSearchParams, setFilmSearchParams] = useSearchParams();
  const location = useLocation();
  let film = filmSearchParams.get('query') ?? '';

  useEffect(() => {
    setFilmSearch(film);
    setFilmSearchGallery([]);
    FetchSearchQuery(filmSearch)
      .then(gallery => {
        if (gallery.results.length === 0) {
          Notiflix.Notify.failure('Film not found');
          setFilmSearch('');
          return;
        }
        setFilmSearchGallery(gallery.results);
      })
      .catch(error => console.log('ERROR'));
  }, [filmSearch, film]);

  const handleSubmitSearchFilm = event => {
    event.preventDefault();
    if (film === '') {
      setFilmSearchParams({});
      Notiflix.Notify.warning('Enter a search term');
      return;
    }
    setFilmSearchParams({ query: film });
    setFilmSearch(film);
    event.target.reset();
  };

  const handleSearchForm = event => {
    film = event.target.value;
  };

  return (
    <div>
      <Outlet />
      <form onSubmit={handleSubmitSearchFilm}>
        <input
          class="input"
          type="text"
          name="searchform"
          autocomplete="off"
          autofocus
          placeholder="Search movie for found"
          onChange={handleSearchForm}
        ></input>
        <button type="submit" to={`query=${film}`}>
          Search
        </button>
      </form>

      {filmSearchGallery && (
        <ul>
          {filmSearchGallery.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
