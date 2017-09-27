//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';
import Root from './components/root';

// for console testing
import { fetchStory, updateStory } from './util/story_api_util';
import { createComment, fetchComments } from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // for console testing
  window.fetchStory = fetchStory;
  window.updateStory = updateStory;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createComment = createComment;
  window.fetchComments = fetchComments;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
