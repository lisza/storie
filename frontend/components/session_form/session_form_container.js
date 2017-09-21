import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.sessionErrors
});

const mapDispatchToProps = (dispatch) => {
  return ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
