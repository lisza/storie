import React from 'react';
import StoryIndexThumb from '../stories/stories_index_thumb';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAuthoredStories(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    const { user, authoredStories } = this.props;

    return(
      <div className="main-content">
        <section className="user-profile">
          <section className="user-text">
            <h1>{user.username}</h1>
            <p>{user.biography}</p>
          </section>
          <img className="user-image-large" src={user.image_url}></img>
        </section>
        <section className="user-profile-feed">
          <h2>{user.username}s stories</h2>
          {authoredStories.map(story => (
            <StoryIndexThumb story={story} key={`story-thumb-${story.id}`} />)
            )
          }
        </section>
      </div>

    );
  }
}

export default UserProfile;
