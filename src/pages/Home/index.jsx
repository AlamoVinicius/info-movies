import React, { useState, useEffect } from 'react';
import MovieCard from '../../components/MovieCard';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const { results } = await res.json();
    // console.log(data.results[0].)
    setTopMovies(results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="moviesContainer">
        {topMovies === 0 && <p>Carregando....</p>}
        {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
