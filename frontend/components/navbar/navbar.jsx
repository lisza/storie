import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  if currentUser
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
        width="50px"/>
    </Link>
    // <Link to="/stories/new">Write a story</Link>
    <button onClick={logout}>Log Out</button>
  </nav>
);

const Nav = ({ currentUser, logout }) => (
  currentUser ? personalNav(currentUser, logout) : sessionLinks()
);

export default Nav;
