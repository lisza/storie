import merge from 'lodash/merge';

import {
  RECEIVE_STORIES,
  RECEIVE_STORY,
  REMOVE_STORY
} from '../actions/story_actions';

const StoriesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STORIES:
      return merge({}, action.stories);
    case RECEIVE_STORY:
      return merge({}, { [action.story.id]: action.story });
    case REMOVE_STORY:
      let newState = merge({}, state);
      delete newState[action.story.id];
      return newState;
    default:
      return state;
  }
};

export default StoriesReducer;
