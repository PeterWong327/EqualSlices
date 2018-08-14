import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

// <Link className="login-main" to="/login">Log in</Link>
// &nbsp;or&nbsp;
// <button className="signup-main" onClick={() => openModal('signup')}>Sign up</button>


const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
        <h3>
          <button className="login-main" onClick={() => openModal('login')}>Log in</button>
          &nbsp;or&nbsp;
          <Link className="signup-main" to="/signup">Sign up</Link>
          &nbsp;or&nbsp;
          <button className="button-guest" onClick={() => dispatch(login({
            username: "Demo",
            email: "demo@equalslices.com" ,
            password: "password"}))}>Log in as a guest</button>
        </h3>
      <br/>
      <br/>
    </nav>
  )

  // <h4>Share bills and IOUs. Make sure everyone gets paid back.
  //   Totally free for web, iPhone, and Android.
  // </h4>
  // <h2>SPLIT EXPENSES WITH FRIENDS</h2>


  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Logged in as {currentUser.username}</h2>
      <br/>
      <button className="header-button" onClick={logout}>Log out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;
