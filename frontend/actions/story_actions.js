import * as ApiUtil from '../util/story_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_STORY = 'RECEIVE_STORY';
export const REMOVE_STORY = 'REMOVE_STORY';


export const fetchStories = () => (dispatch) => (
  ApiUtil.fetchStories().then(stories => (
    dispatch(receiveStories(stories)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON)))
  ))
);

export const fetchStory = (id) => (dispatch) => (
  ApiUtil.fetchStory(id).then(story => (
    dispatch(receiveStory(story)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
  ))
);

export const createStory = (story) => (dispatch) => {
  return ApiUtil.createStory(story).then(newStory => (
    dispatch(receiveStory(newStory))
  ), errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  })
};

export const updateStory = (story) => (dispatch) => (
  ApiUtil.updateStory(story).then(newStory => (
    dispatch(receiveStory(newStory)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
  ))
);

export const deleteStory = (story) => (dispatch) => (
  ApiUtil.deleteStory(story).then(story => (
    dispatch(removeStory(story)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
  ))
);

// new for user profile stories feed
export const fetchAuthoredStories = (id) => (dispatch) => (
  ApiUtil.fetchAuthoredStories(id).then((stories) => (
    dispatch(receiveStories(stories)
  ), errors => (
    dispatch(receiveErrors(errors.responseJSON))
  )
  ))
);

const receiveStories = (stories) => ({
  type: RECEIVE_STORIES,
  stories
});

const receiveStory = (story) => ({
  type: RECEIVE_STORY,
  story
});

const removeStory = (story) => ({
  type: REMOVE_STORY,
  story
});
