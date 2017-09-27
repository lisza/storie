import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.storyId);
  }

  render() {
    if (!this.props.comments) return null;

    return (
      <section className="comments">
        <h1>Comments</h1>
        {this.props.comments.map(comment => (
          <CommentItem
            comment={comment}
            key={`comment-${comment.id}`}
            currentUser={this.props.currentUser}
            deleteComment={this.props.deleteComment}
           />
        ))}
      </section>
    );
  }
}

export default Comments;
