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
import DashboardContainer from './dashboard/dashboard_container';
import FriendDetailContainer from './friendings/friend_detail_container';
import AddBillFormContainer from './bills/add_bill_form_container';
import MainDashboardContainer from './dashboard/main_dashboard_container';


// <ProtectedRoute path="/dashboard" component={FriendSearchContainer}></ProtectedRoute>

// <ProtectedRoute exact path="/dashboard" component={MainDashboardContainer}></ProtectedRoute> //in dashboard friend detail container


const App = () => (
  <div>
    <Modal />
    <header className="nav-bar">
      <h1>
        <Link to="/" className ="homepage-link">E q u a l S l i c e s</Link>
      </h1>
        <GreetingContainer />
    </header>

    <div className="container-app">


      <div className="friend-list-container2">
        <ProtectedRoute path="/" component={FriendIndexContainer}></ProtectedRoute>
        <ProtectedRoute path="/" component={FriendSearchContainer}></ProtectedRoute>
      </div>

      <div className="dashboard-friend-detail-containers">
        <ProtectedRoute exact path="/dashboard" component={MainDashboardContainer}></ProtectedRoute>
        <ProtectedRoute path="/friendings/:id" component={DashboardContainer}></ProtectedRoute>
      </div>

      <div className="friend-balance-container">
        <ProtectedRoute path="/friendings/:id" component={FriendDetailContainer}></ProtectedRoute>
      </div>

    </div>

    <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer}></AuthRoute>
        <AuthRoute exact path="/" component={SplashContainer}></AuthRoute>
        <AuthRoute exact path="/" component={GreetingContainer}></AuthRoute>
    </Switch>

  </div>
);

export default App;
