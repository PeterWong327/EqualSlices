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
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id)
  }

  render() {
    const dashboard_end = "'s Dashboard";

    return (
      <div className="dashboard-items">
        <div className="dashboard-main">
          <label className="dashboard-header">{this.props.currentUser.username}{dashboard_end}</label>
          <button className="dashboard-add-bill-btn">Add a bill</button>
          <button className="dashboard-settle-btn">Settle up</button>
        </div>

        <div className="dashboard-balance-summary">
          <div className="dashboard-total-balance">
            Total Balance

              <div className="dashboard-actual-total-balance">
                $50
              </div>
          </div>

          <div className="dashboard-you-owe">
            You Owe

              <div className="dashboard-actual-you-owe">
                $50
              </div>
          </div>

          <div className="dashboard-you-are-owed">
            You Are Owed

              <div className="dashboard-actual-you-are-owed">
                $100
              </div>
          </div>
        </div>

        <div className="dashboard-friend-transactions">
          Transaction 1
          <br></br>
          {this.props.currentUser.username} owe $50
          <br></br>
          Transaction 2
        </div>
      </div>
    )
  }
}
export default Dashboard;
