import React from 'react';
import { Link } from 'react-router-dom';
// import SessionForm from '../session_form/session_form';
// import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';

// <Link className="login-main" to="/login">Log in</Link>
// &nbsp;or&nbsp;
// <button className="signup-main" onClick={() => openModal('signup')}>Sign up</button>
// <img className="splash-phone-img" src={window.images.splash}></img>


const Dashboard = () => {

  const dashboardItems = () => (
    <div className="dashboard-main">
      <label className="dashboard-header">Dashboard</label>
      <button className="dashboard-add-bill-btn">Add a bill</button>
      <button className="dashboard-settle-btn">Settle up</button>
    </div>
  )

  return dashboardItems();
};

export default Dashboard;
