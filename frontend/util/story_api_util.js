export const createStory = (story) => (
  $.ajax({
    method: 'POST',
    url: 'api/stories',
    data: {story}
  })
);

export const fetchStories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/stories'
  })
);

export const fetchStory = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/stories/${id}`
  })
);

export const updateStory = (story) => (
  $.ajax({
    method: 'PATCH',
    url: `api/stories/${story.id}`,
    data: {story}
  })
);

export const deleteStory = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/stories/${id}`
  })
);

export const fetchAuthoredStories = (author_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/stories',
    data: { author_id }
  })
);
