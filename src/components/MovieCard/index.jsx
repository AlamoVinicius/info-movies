import React from 'react';
import { Link } from 'react-router-dom';

import { FaStar } from 'react-icons/fa';

const IMAGE_URL = import.meta.env.VITE_IMG;
const MovieCard = ({ movie, showLink = true }) => (
  <div className="movieCard">
    <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>
      <FaStar /> {movie.vote_average}
    </p>
    {showLink && <Link to={`movie/${movie.id}`}>Details</Link>}
  </div>
);

export default MovieCard;
