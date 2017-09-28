import React from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';
import UserThumb from '../users/user_thumb';

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
    const { comment, currentUser } = this.props;

    return (
      <div className="comment-item">
        <UserThumb
          userId={comment.author.id}
          username={comment.author.username}
          userImage={comment.author.image_url}
          postDate={comment.created_at} />

        { (currentUser && (currentUser.id === comment.author.id)) ?
         <button onClick={this.handleDelete}>Delete</button> :
         null }

         <p><Linkify>{comment.body}</Linkify></p>
      </div>
    );
  }
}

export default CommentItem;
