import React from 'react';

class ShowStory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  render() {
    const { currentUser, story, fetchStory, deleteStory } = this.props;

    console.log(this.props);
    if (!story) { return null };

    return (
      <div>
        <section className="story">
          <h2>{story.title}</h2>
          <h3>{story.description}</h3>
          <p>{story.body}</p>
          <div className="user-info-thumb">
            <img className="user-image-small" src={story.author.author_image} />
            {story.author.author_name}
           </div>
        </section>
      </div>
    )
  }

}

export default ShowStory;
