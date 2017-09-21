import React from 'react';
import { Link, Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <header>

    <NavbarContainer />
    
  </header>
);

export default App;

// <AuthRoute path="/" component={SessionFormContainer} />
