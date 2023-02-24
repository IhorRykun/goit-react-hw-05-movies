import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSearchQuery } from 'components/API/FetchApi';
import Notiflix from 'notiflix';

export const Movie = () => {
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
          Notiflix.Notify.faiture('film not found');
          setFilmSearch('');
          return;
        }
        setFilmSearchGallery(gallery.results);
      })
      .catch(error => console.log('ERROR'));
  }, [film, filmSearch]);

  const handleSubmitSearchFilm = e => {
    e.preventDefault();
    if (film === '') {
      setFilmSearchParams({});
      Notiflix.Notify.warning('Enter a search term');
      return;
    }
    setFilmSearchParams({ query: film });
    setFilmSearch(film);
    e.target.reset();
 };
 const handleSearchForm = event => {
   film = event.target.value;
 };

 return (
  <div>
   
  </div>
 )
};
