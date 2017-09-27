export const fetchComments = (story_id) => (
  $.ajax({
    method: 'GET',
    url: `api/stories/${story_id}/comments`
  })
);

export const fetchComment = (story_id, id) => (
  $.ajax({
    method: 'GET',
    url: `api/stories/${story_id}/comments/${id}`
  })
);

export const createComment = (story_id, comment) => (
  $.ajax({
    method: 'POST',
    url: `api/stories/${story_id}/comments`,
    data: {comment}
  })
);

export const deleteComment = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
    data: {id}
  })
);
