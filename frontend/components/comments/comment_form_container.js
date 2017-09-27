import { connect } from 'react-redux';
import CommentForm from './comment_form';

import { createComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  storyId: ownProps.storyId,
});

const mapDispatchToProps = (dispatch) => ({
  createComment: (storyId, comment) => dispatch(createComment(storyId, comment)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
