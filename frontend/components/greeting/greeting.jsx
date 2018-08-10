import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <h2>
      <Link to="/login">"Log in"</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">"Sign up"</Link>
      </h2>
      <br/>
        <h2>SPLIT EXPENSES WITH FRIENDS</h2>
        <br/>
        <h4>Share bills and IOUs. Make sure everyone gets paid back.
          Totally free for web, iPhone, and Android.
        </h4>
    </nav>
  )

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">{currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log out</button>
    </hgroup>
  )

  return currentUser ? personalGreeting() : sessionLinks();

};

export default Greeting;
