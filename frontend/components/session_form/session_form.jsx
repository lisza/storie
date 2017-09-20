import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return event => this.setState({
      [field]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user); // changed from {user}
  }

  loginOrSignup() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Don't have an account? Sign Up</Link>;
    } else {
      return <Link to="/login">Already have an account? Login</Link>;
    }
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
    return (
        <section className="session-form">
          storie
          <br/>
          {this.renderErrors()}

            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>

            <br/>

            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>

            <br/>

            <button onClick={this.handleSubmit}>{this.props.formType}</button>
            {this.loginOrSignup()}
        </section>
    );
  }
}

export default withRouter(SessionForm);
