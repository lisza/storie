//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

//testing
import { fetchStory, updateStory } from './util/story_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchStory = fetchStory;
  window.updateStory = updateStory;
  window.getState = store.getState;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
