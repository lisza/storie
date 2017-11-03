import React from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';
import CommentsContainer from '../comments/comments_container';
import UserThumb from '../users/user_thumb'

class ShowStory extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchStory(this.props.match.params.storyId);
  }

  handleDelete() {
    this.props.deleteStory(this.props.story.id)
      .then((story) => this.props.history.push({pathname: "/"}));
  }

  render() {
    const { currentUser, story} = this.props;

    if (!story) { return null };

    return (
      <div className="main-content">
        <section className="story">
          <h2>{story.title}</h2>
          <h3>{story.description}</h3>

          <section className="story-image">
            <img src={story.image_url}/>
          </section>

          <Linkify>
            <p>{story.body}</p>
          </Linkify>

        </section>

        <section className="story-info">

          <UserThumb
            userId={story.author.author_id}
            username={story.author.author_name}
            userImage={story.author.author_image}
            postDate={story.created_at} />

          {(currentUser && (this.props.currentUser.id === this.props.story.author.author_id)) ?
            <div className="edit-links">
              <Link to={`/stories/${this.props.story.id}/edit`}>Edit</Link>
              <button onClick={this.handleDelete}>Delete</button>
            </div> : null }
        </section>

        <CommentsContainer storyId={this.props.story.id}/>
      </div>
    )
  }
}

export default ShowStory;
