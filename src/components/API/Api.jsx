const API_KEY = '2a8fa854fb9f32eb6aeb00b4d9a1b220';
const API_HTTP = 'https://api.themoviedb.org/3/';

export const FetchMovieTrend = page => {
  return fetch(
    `${API_HTTP}trending/movie/day?api_key=${API_KEY}&
        &page=${page}`
  ).then(responce => responce.json());
};

export const FetchMovieID = id => {
  return fetch(`${API_HTTP}movie/${id}?api_key=${API_KEY}`).then(responce =>
    responce.json()
  );
}; 

export const FetchMovieRevId = id => {
  return fetch(`${API_HTTP}movie/${id}/reviews?api_key=${API_KEY}`).then(
    responce => responce.json()
  );
};

export const FetchMovieCastId = id => {
  return fetch(`${API_HTTP}movie/${id}/credits?api_key=${API_KEY}`).then(
    responce => responce.json()
  );
};

export const FetchSearchQuery = query => {
  return fetch(
    `${API_HTTP}search/movie?api_key=${API_KEY}&query=${query}`
  ).then(responce => responce.json());
};
