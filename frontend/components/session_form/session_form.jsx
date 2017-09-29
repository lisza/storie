import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginForm: 'true',
      showModal: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.toggleForms = this.toggleForms.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleOpenModal(boolean) {
    this.props.clearErrors();
    this.setState({
      showModal: true,
      loginForm: boolean
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.currentTarget.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    // reset input fields
    this.setState({ username: "", password: "" });

    if (this.state.loginForm) {
      this.props.login(user);
    } else {
      this.props.signup(user);
    }
  }

  toggleLoginButton() {
    return this.state.loginForm ? "Login" : "Sign Up"
  }

  toggleForms() {
    this.props.clearErrors();
    this.setState({ loginForm: !this.state.loginForm });
  }

  toggleFormLink() {
    if (this.state.loginForm) {
      return <p>Don't have an account?
        <span className="login-button">Sign Up</span></p>;
    } else {
      return <p>Already have an account?
        <span className="login-button">Login</span></p>;
    }
  }

  demoLogin(event) {
    event.preventDefault();
    this.props.login({username: "guest", password: "password"})
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // if I want to add an email field for signup, put this-ish inside
    // the form tag:
    // { this.state.loginForm ? null : this.renderEmailForm() }
    // I'd have to write renderEmailForm of course.
    return (
      <div>

        <nav className="session-links">
          <button onClick={this.handleOpenModal.bind(this, true)} >Write a story</button>
          <button onClick={this.handleOpenModal.bind(this, true)} >Login</button>
          <button onClick={this.handleOpenModal.bind(this, false)} >Sign Up</button>
        </nav>

        <Modal
          className="session-form-modal"
          overlayClassName="session-form-modal-overlay"
          contentLabel="Session Modal"
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          >

          <form className="session-form">
            <span className="logo">storie</span>

            <div className="session-errors">{this.renderErrors()}</div>

            <label>Username:
              <br />
              <input type="text" value={this.state.username}
                onChange={this.update('username')} />
            </label>

            <br/>

            <label>Password:
              <br />
              <input type="password" value={this.state.password}
                onChange={this.update('password')} />
            </label>

            <br/>

            <button className="login-button" onClick={ this.handleSubmit }>
              {this.toggleLoginButton()}
            </button>
            <button className="demo-login-button" onClick={ this.demoLogin }>
              Demo Login
            </button>

            <Link to="/" onClick={this.toggleForms}>
              {this.toggleFormLink()}
            </Link>

          </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
