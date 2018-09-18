import React from 'react';
import { Link } from 'react-router-dom';
// import SessionForm from '../session_form/session_form';
// import { login } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import DashboardContainer from './dashboard_container';

// <Link className="login-main" to="/login">Log in</Link>
// &nbsp;or&nbsp;
// <button className="signup-main" onClick={() => openModal('signup')}>Sign up</button>
// <img className="splash-phone-img" src={window.images.splash}></img>

// const Dashboard1 = () => {
//
//   const dashboardItems = () => (
//   )
//
//   return dashboardItems();
// };
class Dashboard extends React.Component {

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id)
  }

  render() {
    return (
      <div className="dashboard-items">
        <div className="dashboard-main">
          <label className="dashboard-header">Dashboard</label>
          <button className="dashboard-add-bill-btn">Add a bill</button>
          <button className="dashboard-settle-btn">Settle up</button>
        </div>
        <div className="dashboard-friend-transactions">
          Transaction 1
          {this.props.currentUser.username} owes Homer $50
          <br></br>
          Transaction 2
        </div>
      </div>
    )
  }
}
export default Dashboard;
