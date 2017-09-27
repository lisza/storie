import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    event.preventDefault();
    this.props.deleteComment(this.props.comment.id);
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className="comment-item">
        <Link className="user-info-thumb" to={`/users/${comment.author.author_id}`}>
          <img className="user-image-small" src={comment.author.image_url} />
          {comment.author.username}
        </Link>

        { this.props.currentUser.id === comment.author.id ?
         <button onClick={this.handleDelete}>Delete</button> :
         null }

        <p>{comment.body}</p>
      </div>
    );
  }
}

export default CommentItem;
