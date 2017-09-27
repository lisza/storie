import * as ApiUtil from '../util/comment_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = (storyId) => (dispatch) => (
  ApiUtil.fetchComments(storyId).then(comments => (
    dispatch(receiveComments(comments))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const fetchComment = (storyId, id) => (dispatch) => (
  ApiUtil.fetchComment(storyId, id).then(comment => (
    dispatch(receiveComment(comment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const createComment = (storyId, comment) => (dispatch) => (
  ApiUtil.createComment(storyId, comment).then(newComment => (
    dispatch(receiveComment(newComment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteComment = (id) => (dispatch) => (
  ApiUtil.deleteComment(id).then(newComment => (
    dispatch(removeComment(newComment))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  comment
});
