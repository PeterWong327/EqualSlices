import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { Route } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Modal from './modal/modal';
import FriendIndexContainer from './friendings/friend_index_container';
import FriendSearchContainer from './friendings/friend_search_container';
import SplashContainer from './splash/splash';

// <AuthRoute path="/" component={Splash}></AuthRoute>


// <Route path="/friendings/:friendId" component={FriendDetailContainer}></Route>
// <AuthRoute exact path="/login" component={LoginFormContainer}></AuthRoute>

// <Redirect to="/" />
const App = () => (
  <div>
    <Modal />
    <header className="nav-bar">
      <h1>
        <Link to="/" className ="homepage-link">E q u a l S l i c e s</Link>
      </h1>
        <GreetingContainer />
    </header>
    <ProtectedRoute path="/" component={FriendIndexContainer}></ProtectedRoute>
    <ProtectedRoute path="/" component={FriendSearchContainer}></ProtectedRoute>

<Switch>
    <AuthRoute exact path="/" component={SplashContainer}></AuthRoute>
    <AuthRoute exact path="/" component={GreetingContainer}></AuthRoute>
    <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>

</Switch>

  </div>
);

export default App;
