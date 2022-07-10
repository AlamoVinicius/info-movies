import React from 'react';
import { Link } from 'react-router-dom';

import { RiMovie2Line, RiSearch2Line } from 'react-icons/ri';

const NavBar = () => (
  <nav id="navbar">
    <h2>
      <Link to="/">
        <RiMovie2Line /> SearchMovies
      </Link>
    </h2>
    <form>
      <input type="text" placeholder="search for a movie" />
      <button type="submit">
        <RiSearch2Line />
      </button>
    </form>
  </nav>
);

export default NavBar;
