import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavContainer from './navbar/navbar_container';
import Nav from './navbar/navbar';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <header>
    <Link to="/">
      <span className="logo">storie</span>
    </Link>
    <Link to="/stories/new">
      <span className="new-story-link">Write a story</span>
    </Link>
    <Nav />

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </header>


);

export default App;
