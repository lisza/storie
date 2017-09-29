import React from 'react';
import { Link } from 'react-router-dom';
import ShowStoryContainer from './show_story_container';
import UserThumb from '../users/user_thumb';

const StoryIndexThumb = ({ story }) => (

  <div className="story-thumb">
      <Link to={`/stories/${story.id}`}>
        <h1>{story.title}</h1>
        {story.description ? <h3>{story.description}</h3>
      : <p>{story.body.slice(0,200)}...</p>}
      </Link>

      <UserThumb
        userId={story.author.author_id}
        username={story.author.author_name}
        userImage={story.author.author_image}
        postDate={story.created_at} />
  </div>
);

export default StoryIndexThumb;
