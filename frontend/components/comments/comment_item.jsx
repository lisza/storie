import React from 'react';
import { Link } from 'react-router-dom';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;

    return (
      <div className="comment-item">
        <Link className="user-info-thumb" to={`/users/${comment.author.author_id}`}>
          <img className="user-image-small" src={comment.author.image_url} />
          {comment.author.username}
        </Link>
        <p>{comment.body}</p>
      </div>
    );
  }
}

export default CommentItem;
