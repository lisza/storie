import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import { fetchAuthoredStories } from '../../actions/story_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    user: state.user,
    authoredStories: Object.keys(state.stories).map(id => state.stories[id])
  });
};
// authoredStories: state.user.authoredStories
// authoredStories: Object.keys(state.stories).map(id => state.stories[id])

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAuthoredStories: id => dispatch(fetchAuthoredStories(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserProfile);
