import React from 'react';
import { Link, Route } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'
import StoryFormContainer from '../stories/story_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.clearErrors = this.props.clearErrors.bind(this);
  }

  // {currentUser.username}
  personalNav(currentUser, logout) {
    return (
      <nav>
        <Link onClick={this.clearErrors} to="/stories/new">Write a story</Link>

        <span className="button-cursor-pointer" onClick={ logout }>Log Out</span>

        <Link className="user-thumb" to={`/users/${currentUser.id}`}>
          <img
            className="user-image-small"
            src={ currentUser.image_url }
            />
        </Link>
    </nav>
    );
  }

  // We turned <a> into span to prevent weird double logout rerendering
  // But the cursor pointer is only on links and buttons, so I need to
  // add styling for cursor pointer somehow, give it a className...

  render() {
    const { currentUser, logout } = this.props;
    return(
      <nav className="navbar">
        <Link to="/"><span className="logo">storie</span></Link>
        {currentUser ? this.personalNav(currentUser, logout) : <SessionFormContainer />}
      </nav>
    );
  }
}

export default Navbar;
