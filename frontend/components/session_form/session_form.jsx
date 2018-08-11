import React from 'react';
import { withRouter } from 'react-router-dom';

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
    this.props.processForm(user);
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
        return
      } else {
        return (<label>Hi there! My name is:
          <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            />
        </label>)
      }
    }
    // make if/else statement to show either login or signup form

    return (
      <div className="login-form_container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <br/>
          {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}

          <button onClick={this.demo}>Demo Login</button>

          <div className="login-form">
            <br/>
            {signupReq()}
            <br/>
            <label>Here is my email address:
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                />
            </label>
            <br/>
            <label>And here is my password:
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            </label>
            <br/>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
              />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
