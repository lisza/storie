import { connect } from 'react-redux';
import Comments from './comments';
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    comments: Object.values(state.comments),
    storyId: ownProps.storyId
  })
};

const mapDispatchToProps = (dispatch) =>({
  fetchComments: (storyId) => dispatch(fetchComments(storyId)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
