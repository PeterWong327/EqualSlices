import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {

  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hellooo world</h1>, root);
});
