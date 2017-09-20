import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const personalNav = (currentUser, logout) => (
  <nav>
    <Link to={`/users/${currentUser.id}`}>
      <img
        className="user-image-small"
        src={ currentUser.image_url }
      />
    </Link>
    <a href="" onClick={logout}>Log Out</a>
  </nav>
);

const NavBar = ({ currentUser, logout }) => {
  return(
    <nav className="navbar">
      <Link to="/">storie</Link>
      <Link to="stories/new">Write a story</Link>
      {currentUser ? personalNav(currentUser, logout) : sessionLinks()}
    </nav>
  )
};

export default NavBar;
