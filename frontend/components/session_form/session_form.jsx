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
        return
      } else {
        return (<label>Hi there! My name is:
          <br/>
          <input className="username-textbox" type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            />
        </label>)
      }
    }

    return (
      <div className="login-form_container">
        <form onSubmit={this.handleSubmit} className="login-form-box">

          <br/>

          <button onClick={this.demo}>Demo Login</button>

          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="login-form">
            {this.props.formType} or {this.props.navLink}
            <br/>
            <br/>
            {signupReq()}
            <br/>
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
            <br/>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
              />
          </div>

          <div className="errors">
            {this.renderErrors()}
          </div>


        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
