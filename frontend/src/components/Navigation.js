import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../pages/TopicPage">Topics</Link>
        <Link to="/Playlist">Playlist</Link>
    </nav>
  );
}

export default Nav;
