import React from 'react';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
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


  demo(e) {
    e.preventDefault();
    this.props.demoLogin({username: "Demo", email: "demo@equalslices.com" , password: "password"});
  }

  render() {
    const signupReq = () => {
      if (this.props.formType.includes("Log")) {
        return (
          <div className="login-form">
            <label>
              <br/>
              <input
                placeholder="Email address"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
            <br/>
            <label>
              <br/>
              <input
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <br/>
            <input
              className="session-submit-login"
              type="submit"
              value={this.props.formType}
              />
            <div className="login-errors">
              {this.renderErrors()}
            </div>
          </div>
        )
      } else {
        return (
          <div className="signup-form">
            <label>
              <div className="introduce-yourself">
                INTRODUCE YOURSELF
              </div>
            <br/>
                <h5>
                  Hi there! My name is:
                </h5>
                <br/>
              <input className="username-textbox" type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="signup-input"
                />
            </label>
            <br/>
            <br/>
            <label>
                <h5>
                  Here is my email address:
                </h5>
                <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                />
            </label>
            <br/>
            <br/>
            <label>
              <h5>
                And here is my password:
              </h5>
                <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                />
            </label>
            <br/>
            <br/>
            <input
              className="session-submit-signup"
              type="submit"
              value={this.props.formType}
              />
            <div className="signup-errors">
              {this.renderErrors()}
            </div>
        </div>
        )
      }
    }

    return (
      <div className="login-form_container">

        <form onSubmit={this.handleSubmit} className="login-form-box">

          <div>
            {signupReq()}
          </div>
        </form>
      </div>
    );
  }
}
// <div className="errors">
//   {this.renderErrors()}
// </div>

// <br/>
// <br/>
// <input
//   className="session-submit"
//   type="submit"
//   value={this.props.formType}
//   />
export default withRouter(SessionForm);
