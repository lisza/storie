import * as ApiUtil from '../util/story_api_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';
export const RECEIVE_STORY_ERRORS = 'RECEIVE_STORY_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const fetchStories = () => (dispatch) => (
  ApiUtil.fetchStories().then(stories => (
    dispatch(receiveStories(stories)
  ))
);

export const fetchStory = (id) => (dispatch) => (
  ApiUtil.fetchStory(id).then(story => (
    dispatch(receiveStories(story)
  ))
);

export const createStory = (story) => (dispatch) => (
  ApiUtil.createStory(story).then(newStory => (
    dispatch(receiveStory(newStory))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const updateStory = (story) => (dispatch) => (
  ApiUtil.updateStory(story).then(newStory => (
    dispatch(receiveStory(newStory))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const deleteStory = (story) -> (dispatch) => (
  ApiUtil.deleteStory(story).then(story => (
    dispatch(removeStory(story))
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

export const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story
});

export const removeStory = (story) => ({
  type: REMOVE_STORY,
  story
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_STORY_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
