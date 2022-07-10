/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setTopMovies(data)
  }

  useEffect(() => {
      const topRatedUrl = `${moviesUrl}top_rated?${apiKey}` 
      getTopRatedMovies(topRatedUrl)
    }, [])
  

  return <div>{JSON.stringify(topMovies)}</div>;
};

export default Home;
