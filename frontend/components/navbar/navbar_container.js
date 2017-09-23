import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => {
  return { currentUser: session.currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
