import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { FetchMovieID } from 'components/API/Api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    FetchMovieID(movieId)
      .then(movie => setReviews(movie.results))
      .catch(error => console.log('ERROR'));
  }, [movieId]);
  if (reviews.length === 0) {
    return <p>Reviews not found</p>;
  }

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Author : {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
