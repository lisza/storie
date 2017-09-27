import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments()
  }

  render() {

    // Do I need this? Maybe.
    // if (!this.props.comments) {
    //   return (
    //     <div>Loading...</div>
    //   )}

    return (
      <section className="comments">
        <h1>Comments</h1>
        {this.props.comments.map(comment => (
          <CommentItem comment={comment} key={`comment-${comment.id}`} />
        ))}
      </section>
    );
  }
}

export default Comments;

// <li>
//   {comment.author.username}: {comment.body}
// </li>
