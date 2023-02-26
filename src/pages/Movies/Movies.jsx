import { Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSearchQuery } from '../../components/API/Api';
import { toast } from 'react-toastify';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  ItemStyle,
  LinkStyle,
  ListStyle,
} from './Movies.styled';

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
          toast.error('Film not found');
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
      toast.error('Enter a search term');
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
      <FormStyled onSubmit={handleSubmitSearchFilm}>
        <InputStyled
          class="input"
          type="text"
          name="searchform"
          autocomplete="off"
          autofocus
          placeholder="Search movie for found"
          onChange={handleSearchForm}
        ></InputStyled>
        <ButtonStyled type="submit" to={`query=${film}`}>
          Search
        </ButtonStyled>
      </FormStyled>

      {filmSearchGallery && (
        <ListStyle>
          {filmSearchGallery.map(({ id, title }) => {
            return (
              <ItemStyle key={id}>
                <LinkStyle to={`${id}`} state={{ from: location }}>
                  {title}
                </LinkStyle>
              </ItemStyle>
            );
          })}
        </ListStyle>
      )}
    </div>
  );
};
