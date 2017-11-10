import React from 'react';
import StoryIndexThumb from '../stories/stories_index_thumb';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchAuthoredStories(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
      this.props.fetchAuthoredStories(nextProps.match.params.userId);
    }
  }

  toggleFollow() {
    if (this.props.followedByCurrentUser) {
      this.props.unfollowUser(this.props.user.id);
    } else {
      this.props.followUser(this.props.user.id);
    }
  }

  render() {
    const { currentUser, user, authoredStories, following, followers, followedByCurrentUser } = this.props;

    if (user.id === null) return (<div>Loading...</div>);

    return(
      <div className="main-content">
        <section className="user-profile">

          <section className="user-text">
            <h1>{user.username}</h1>
            <p>{user.biography}</p>
          </section>

          <img className="user-image-large" src={user.image_url}></img>

          <section className="follows">
            <p>
              <span>{following.length} Following</span>
              <span>{followers.length} {followers.length === 1 ? "Follower" : "Followers"}</span>
            </p>

            {(currentUser && (currentUser.id === user.id)) ? null :
              <button onClick={this.toggleFollow}>
                {!currentUser ? "Log in to " : null}
                {currentUser && followedByCurrentUser ? "Unfollow" : "Follow"}
              </button>
            }
          </section>

        </section>

        <section className="user-profile-feed">
          {authoredStories.length === 0 ?
            <h2>{user.username} hasn't published any stories.</h2>
            : <h2>{user.username}s stories</h2>
          }

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
