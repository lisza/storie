import { connect } from 'react-redux';
import Comments from './comments';
import { fetchComments, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  console.log("OWN PROPS: ", ownProps);
  console.log("STATE: ", state);
  // debugger;

  return ({
    currentUser: state.session.currentUser,
    comments: state.stories[ownProps.storyId].comments,
    storyId: ownProps.storyId
  })
};

// storyId: ownProps.storyId

const mapDispatchToProps = (dispatch) =>({
  fetchComments: (storyId) => dispatch(fetchComments(storyId)),
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
