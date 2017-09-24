import { connect } from 'react-redux';
import StoryForm from './story_form';
import { createStory, updateStory, fetchStory } from '../../actions/story_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  story: state.stories[ownProps.match.params.storyId],
  formType: ownProps.formType,
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createStory: (story) => dispatch(createStory(story)),
  updateStory: (story) => dispatch(updateStory(story)),
  fetchStory: (id) => dispatch(fetchStory(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);
