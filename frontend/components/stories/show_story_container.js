import { connect } from 'react-redux';
import ShowStory from './show_story';
import { fetchStory, updateStory, deleteStory } from '../../actions/story_actions';

const mapStateToProps = (state, { match }) => ({
    currentUser: state.session.currentUser,
    story: state.stories[match.params.storyId]
  });

const mapDispatchToProps = (dispatch) => ({
  fetchStory: (id) => dispatch(fetchStory(id)),
  deleteStory: (id) => dispatch(deleteStory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowStory);
