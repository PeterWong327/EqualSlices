import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
    )}/>
);

//checks if user is logged in before access to page is granted. App.jsx
// contains routes for containers that will only show if user is logged in
const Protected = ({component: Component, path, loggedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn ? (
        <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) => {
  return {loggedIn: Boolean(state.session.id)}
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
