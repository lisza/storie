import React from 'react';
import { Link } from 'react-router-dom';

class UserThumb extends React.Component {

  render() {
    const { userId, username, userImage, postDate } = this.props;
    const date = new Date(postDate)

    return  (
      <Link className="user-thumb" to={`/users/${userId}`}>
        <img className="user-image-small" src={userImage} />
        <div>
          <span className="user-thumb-name">{username}</span> <br />
          <span className="user-thumb-date">{date.toDateString()}</span>
        </div>
      </Link>
    );
  }
}

export default UserThumb;
