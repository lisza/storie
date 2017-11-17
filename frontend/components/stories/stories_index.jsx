import React from 'react';
import StoriesIndexThumb from './stories_index_thumb';

class StoriesIndex extends React.Component {

  componentDidMount() {
    this.props.fetchStories();
  }

  componentDidUpdate() {
    if(sessionStorage.scrollPosition) {
      $(document).scrollTop(sessionStorage.scrollPosition);
      sessionStorage.setItem("scrollPosition", 0);
    }
  }

  componentWillUnmount() {
    const scrollPosition = $(document).scrollTop();
    sessionStorage.setItem("scrollPosition", scrollPosition);
  }

  render() {
    const { stories } = this.props;

    return(
      <div className="stories-index">
        {stories.map((story, i) => (
          <StoriesIndexThumb
            story={story}
            key={`story-thumb-${story.id}`}
            index={i} />
          ))
        }
      </div>
    );
  }
}

export default StoriesIndex;
