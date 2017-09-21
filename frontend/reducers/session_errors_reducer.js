import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors })
    // case RECEIVE_CURRENT_USER:
    //   return [];
    case CLEAR_ERRORS:
      const newState = Object.assign({}, state, { errors: [] })
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
