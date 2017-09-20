import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => {
  if (session) {
    return { currentUser: session.currentUser }
  } else {
    return { currentUser: null }
  }
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
