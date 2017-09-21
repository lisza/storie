import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  personalNav(currentUser, logout) {
    return (
      <nav>
        <Link to={`/users/${currentUser.id}`}>
          <img
            className="user-image-small"
            src={ currentUser.image_url }
            />
        </Link>
        <span onClick={ logout }>Log Out</span>
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
        <Link to="stories/new">Write a story</Link>
        {currentUser ? this.personalNav(currentUser, logout) : <SessionFormContainer />}
      </nav>
    );
  }
}

export default Navbar;
//
// const personalNav = (currentUser, logout) => (
//   <nav>
//     <Link to={`/users/${currentUser.id}`}>
//       <img
//         className="user-image-small"
//         src={ currentUser.image_url }
//       />
//     </Link>
//     <a href="" onClick={logout}>Log Out</a>
//   </nav>
// );
//
// const NavBar = ({ currentUser, logout }) => {
//   return(
//     <nav className="navbar">
//       <Link to="/"><span className="logo">storie</span></Link>
//       <Link to="stories/new">Write a story</Link>
//       {currentUser ? personalNav(currentUser, logout) : <SessionFormContainer />}
//     </nav>
//   )
// };
//
// export default NavBar;
