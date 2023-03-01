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
  StyleImg,
  TextContent,
} from './Movies.styled';
import { MdOutlineImageSearch } from 'react-icons/md';

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
        if (gallery.results.length === '') {
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

    if (film.trim() === '') {
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
      <FormStyled onSubmit={handleSubmitSearchFilm}>
        <InputStyled
          type="text"
          name="searchform"
          autocomplete="off"
          autoFocus
          placeholder="Search movie for found"
          onChange={handleSearchForm}
        ></InputStyled>
        <ButtonStyled type="submit" to={`query=${film}`}>
          <MdOutlineImageSearch style={{ width: '20px', height: '20px' }} />
        </ButtonStyled>
      </FormStyled>

      {filmSearchGallery && (
        <ListStyle>
          {filmSearchGallery.map(({ id, title, backdrop_path }) => {
            const posters = 'https://image.tmdb.org/t/p/w500' + backdrop_path;
            return (
              <ItemStyle key={id}>
                <LinkStyle to={`${id}`} state={{ from: location }}>
                  <StyleImg src={`${posters}`} alt={title} />
                  <TextContent>{title}</TextContent>
                </LinkStyle>
              </ItemStyle>
            );
          })}
        </ListStyle>
      )}
      <Outlet />
    </div>
  );
};
