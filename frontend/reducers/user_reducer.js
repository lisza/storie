import { RECEIVE_USER } from '../actions/user_actions';

const _nullUser = Object.freeze({
  stories: [],
  id: null,
});

const UserReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default UserReducer;
