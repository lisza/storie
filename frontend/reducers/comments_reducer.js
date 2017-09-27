import merge from 'lodash/merge';

import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
      case RECEIVE_COMMENTS:
        return merge({}, action.comments);
      case RECEIVE_COMMENT:
        const comment = action.comment;
        return merge({}, state, { [comment.id]: comment });
      case REMOVE_COMMENT:
        let newState = merge({}, state);
        delete newState[action.comment.id];
        return newState;
      default:
        return state;
  }
};

export default CommentsReducer;
