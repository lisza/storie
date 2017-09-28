import React from 'react';
import StoriesIndexThumb from './stories_index_thumb';

class StoriesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;

    return(
      <div className="main-content">
        <div className="stories-index">
          <h1>All Stories</h1>
          {stories.map(story => (
            <StoriesIndexThumb story={story} key={`story-thumb-${story.id}`} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default StoriesIndex;
