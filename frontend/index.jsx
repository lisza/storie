//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

//for testing
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // for testing
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
