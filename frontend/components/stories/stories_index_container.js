import { connect } from 'react-redux';
import { fetchStories } from '../../actions/story_actions';
import StoriesIndex from './stories_index';
import values from 'lodash/values';

const mapStateToProps = (state) => ({
  stories: values(state.stories)
});

const mapDispatchToProps = (dispatch) => ({
  fetchStories: () => dispatch(fetchStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesIndex);
