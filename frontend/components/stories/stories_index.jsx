import React from 'react';
import StoriesIndexThumb from './stories_index_thumb';

class StoriesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;

    return(
      <div className="stories-index">

        {stories.map(story => (
          <StoriesIndexThumb story={story} key={`story-thumb-${story.id}`} />
          ))
        }

      </div>
    );
  }
}

export default StoriesIndex;
