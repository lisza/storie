import * as ApiUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const followUser = (id) => (dispatch) => (
  ApiUtil.followUser(id).then(user => (
    dispatch(receiveUser(user)
  ), errors => (dispatch(errors.responseJSON))
  ))
);

export const unfollowUser = (id) => (dispatch) => (
  ApiUtil.unfollowUser(id).then(user => (
    dispatch(receiveUser(user)
  ), errors => (dispatch(errors.responseJSON))
  ))
);

export const fetchUser = (id) => (dispatch) => (
  ApiUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user)
  ), errors => (dispatch(errors.responseJSON))
  ))
);
