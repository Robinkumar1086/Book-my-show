import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  
  const movie = {
    id,
    title: 'Movie Title',
    description: 'Detailed description of the movie.',
    postUrl: 'http://example.com/movie-poster.jpg',
  };

  return (
    <div className='movie-details'>
      <h1>{movie.title}</h1>
      <img src={movie.postUrl} alt={movie.title} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
