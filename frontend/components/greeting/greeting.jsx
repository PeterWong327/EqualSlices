import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';
import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

// <Link className="login-main" to="/login">Log in</Link>
// &nbsp;or&nbsp;
// <button className="signup-main" onClick={() => openModal('signup')}>Sign up</button>
// <img className="splash-phone-img" src={window.images.splash}></img>

          // &nbsp;or&nbsp;
const Greeting = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <div>
      <nav className="login-signup">
          <h3>
            <button className="login-main" onClick={() => openModal({type: 'login'})}>Log in</button>

            <Link className="signup-main" to="/signup">Sign up</Link>

            <button className="button-guest" onClick={() => dispatch(login({
              username: "Demo",
              email: "demo@equalslices.com" ,
              password: "password"}))}>Try a demo</button>
          </h3>
        <br/>
        <br/>
      </nav>
    </div>

  )

  // <h4>Share bills and IOUs. Make sure everyone gets paid back.
  //   Totally free for web, iPhone, and Android.
  // </h4>
  // <h2>SPLIT EXPENSES WITH FRIENDS</h2>
    // let currentFriend = this.props.friend.username;

  const personalGreeting = () => (
    <hgroup className="header-group">
      <img className="current-user-profile-pic" src={window.images[`${currentUser.username}`] || window.images.default}></img>

      <div className="header-logged-in-and-log-out">
        <h2 className="header-name">Logged in as {currentUser.username}</h2>
        <br/>
        <button className="header-button" onClick={logout}>Log out</button>
      </div>

    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;
