import React from 'react';
// import StoriesIndexItem from './stories_index_item';

class StoriesIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    const { stories } = this.props;

    return(
      <div>
        <section className="stories-index">

          {stories.map(story => (
              <li>{story.title}</li>
            ))
          }

        </section>
      </div>
    );
  }
}

export default StoriesIndex;
