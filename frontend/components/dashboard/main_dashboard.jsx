import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import MainDashboardContainer from './main_dashboard_container';


class MainDashboard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {

    let youOwe = 0;
    let youAreOwed = 0;

    const keyId = Object.keys(this.props.bills);

    let totalBalance = youAreOwed - youOwe;
    const color = totalBalance < 0 ? "dashboard-actual-total-balance-red" : "dashboard-actual-total-balance-green";

    const dashboard_end = "'s Dashboard";

    return (
      <div className="dashboard-items">
        <div className="dashboard-main">
          <label className="dashboard-header">{this.props.currentUser.username}{dashboard_end}</label>
        </div>

        <div className="dashboard-balance-summary">
          <div className="dashboard-total-balance">
            Total Balance



              </div>
          </div>

          <div className="dashboard-you-owe">
            You Owe

              <div className="dashboard-actual-you-owe">

              </div>
          </div>

          <div className="dashboard-you-are-owed">
            You Are Owed

              <div className="dashboard-actual-you-are-owed">

              </div>
          </div>
        </div>

        <div className="dashboard-friend-transactions">

        </div>
      </div>
    )
  }
}
export default MainDashboard;
