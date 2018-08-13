import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Modal from './modal/modal';


const App = () => (
  <div>
    <Modal />
    <header className="nav-bar">
      <h1>
        <Link to="/" className ="homepage-link">E q u a l S l i c e s</Link>
      </h1>
      <GreetingContainer />
    </header>

<Switch>
    <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>
    <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
    <AuthRoute exact path="/" component={GreetingContainer}></AuthRoute>
    <Redirect to="/" />
</Switch>

  </div>
);

export default App;
