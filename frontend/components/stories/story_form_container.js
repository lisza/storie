import { connect } from 'react-redux';
import StoryForm from './story_form';
import { createStory } from '../../actions/story_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  stories: state.stories,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createStory: (story) => dispatch(createStory(story)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);
