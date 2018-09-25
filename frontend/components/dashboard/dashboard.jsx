import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import DashboardContainer from './dashboard_container';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id).then(
      () => this.props.fetchBills().then(() => this.setState({}))
    )
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.bills).length !== Object.keys(prevProps.bills).length) {
      this.props.fetchBills().then(this.props.closeModal);
    }
  }

  openModal(field) {
    return(e) => {
      this.props.openModal(field);
    };
  }

  render() {

    if (!this.props.friend) {
      return <div></div>
    }

    const dashboard_end = "'s Bills";


    let youOwe = 0;
    let youAreOwed = 0;

    const keyId = Object.keys(this.props.bills);

//logic for totaling up balances: Check each bill amount and add to corresponding balance per user.
    const balances = keyId.forEach(key => {
      if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.friend.id === this.props.bills[key]["biller_id"])) {
        if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) && (this.props.currentUser.id === this.props.bills[key]["biller_id"])) {
          return (
            <div key={key}>
                  {youAreOwed += this.props.bills[key]["balance"]}
                  </div>
                )
        } else if ((this.props.friend.id === this.props.bills[key]["biller_id"]) && (this.props.currentUser.id === this.props.bills[key]["bill_recipient_id"])) {
          return (
            <div key={key}>
                {youOwe += this.props.bills[key]["balance"]}
                  </div>
                )
        }
      }
    })

    let totalBalance = youAreOwed - youOwe;
    const color = totalBalance < 0 ? "dashboard-actual-total-balance-red" : "dashboard-actual-total-balance-green";
    let totalBalanceEdited = totalBalance < 0 ? "-$" + Math.abs(totalBalance) : "$" + totalBalance;

    // logic for checking who the biller and bill recipients are. Then render corresponding info for each bill id;
    const results = keyId.map(key => {
        if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.friend.id === this.props.bills[key]["biller_id"])) {
          if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) && (this.props.currentUser.id === this.props.bills[key]["biller_id"])) {
            return (
              <div key={key} className="dashboard-bill-details">
                <br></br>
                Date: <strong>{this.props.bills[key]["date"]}</strong>
                <br></br>
                <strong className="dashboard-bill-description-text">{this.props.bills[key]["description"]}</strong>
                  <br></br>
                  <div className="dashboard-bill-name-balance">
                    <strong>{this.props.friend.username} </strong> owes you
                    <strong>: ${this.props.bills[key]["balance"]}</strong>
                  </div>
                      <br></br>
                        <input
                          className="dashboard-delete-bill-btn"
                          type="button"
                          value="Delete"
                          >
                        </input>
                      <br></br>
                    </div>
                  )
          } else if ((this.props.friend.id === this.props.bills[key]["biller_id"]) && (this.props.currentUser.id === this.props.bills[key]["bill_recipient_id"])) {
            return (
              <div key={key} className="dashboard-bill-details">
                <br></br>
                Date: <strong>{this.props.bills[key]["date"]}</strong>
                <br></br>
                <strong className="dashboard-bill-description-text">{this.props.bills[key]["description"]}</strong>
                  <br></br>
                  <div className="dashboard-bill-name-balance">
                      <strong>You</strong> owe {this.props.friend.username}
                      <strong>: ${this.props.bills[key]["balance"]}</strong>
                  </div>
                      <br></br>
                      <input
                        className="dashboard-delete-bill-btn"
                        type="button"
                        value="Delete"
                        >
                      </input>
                      <br></br>
                    </div>
                  )
          }
        }

    })

    let currentFriend = this.props.friend.username;
    let character = window.images.currentFriend;

    return (
      <div className="dashboard-items">
        <div className="dashboard-main">
          <img className="profile-pic" src={window.images[`${currentFriend}`] || window.images.default}></img>
          <label className="dashboard-header">{this.props.friend.username}{dashboard_end}</label>
          <button className="dashboard-add-bill-btn" onClick={() => this.props.openModal({type: 'addBill', id: this.props.friend.id})}>Add a bill</button>
          <button className="dashboard-settle-btn" onClick={() => this.props.openModal({type: 'settleUp', id: this.props.friend.id})}>Settle up</button>
        </div>

        <div className="dashboard-balance-summary">
          <div className="dashboard-total-balance">
            Total Balance


              <div className={color}>
                {totalBalanceEdited}
              </div>
          </div>

          <div className="dashboard-you-owe">
            You Owe

              <div className="dashboard-actual-you-owe">
                ${youOwe}
              </div>
          </div>

          <div className="dashboard-you-are-owed">
            You Are Owed

              <div className="dashboard-actual-you-are-owed">
                ${youAreOwed}
              </div>
          </div>
        </div>

        <div className="dashboard-friend-transactions">
          {results}
          {balances}
        </div>
      </div>
    )
  }
}
export default Dashboard;
