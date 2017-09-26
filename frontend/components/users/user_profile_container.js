import { connect } from 'react-redux';
import { fetchUser, followUser, unfollowUser } from '../../actions/user_actions';
import { fetchAuthoredStories } from '../../actions/story_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    authoredStories: Object.keys(state.stories).map(id => state.stories[id]),
    following: state.user.following,
    followers: state.user.followers,
    followedByCurrentUser: state.user.followed_by_current_user
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAuthoredStories: (id) => dispatch(fetchAuthoredStories(id)),
  followUser: (id) => dispatch(followUser(id)),
  unfollowUser: (id) => dispatch(unfollowUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
