import React from 'react';
import { Link } from 'react-router-dom';
import ShowStoryContainer from './show_story_container';

const StoryIndexThumb = ({ story }) => (

  <div className="story-thumb-box">
    <section className="story-thumb-content">
      <Link to={`/stories/${story.id}`}>
        
        <h1>{story.title}</h1>

        <p>{story.body.slice(0,200)}</p>

        <Link className="user-info-thumb" to={`/users/${story.author.author_id}`}>
          <img className="user-image-small" src={story.author.author_image} />
          {story.author.author_name}
        </Link>

      </Link>
    </section>
  </div>

);

export default StoryIndexThumb;
