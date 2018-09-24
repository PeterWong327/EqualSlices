import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container';
import Dashboard from '../dashboard/dashboard';

// {friend} Dashboard
class FriendDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id).then(
      () => this.props.fetchBills().then(() => this.setState({}))
    )
  }

  componentDidUpdate(prevProps) {
    if (Object.keys(this.props.bills).length !== Object.keys(prevProps.bills).length) {
      this.props.fetchBills();
    }
  }


  render() {
    if (!this.props.friend) {
      return <div></div>
    }

    let youOwe = 0;
    let youAreOwed = 0;

    const keyId = Object.keys(this.props.bills);

//logic for totaling up balances: Check each bill amount and add to corresponding balance per user.
    const balances = keyId.forEach(key => {
      if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.friend.id === this.props.bills[key]["biller_id"])) {
        if (this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) {
          return (
            <div key={key}>
                  {youAreOwed += this.props.bills[key]["balance"]}
                  </div>
                )
        } else if (this.props.friend.id === this.props.bills[key]["biller_id"]) {
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

    // logic for checking who the biller and bill recipients are. Then render corresponding info for each bill id;
    const results = keyId.map(key => {
        if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.friend.id === this.props.bills[key]["biller_id"])) {
          if (this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) {
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
          } else if (this.props.friend.id === this.props.bills[key]["biller_id"]) {
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

    const message = totalBalance < 0 ? "You owe " + this.props.friend.username + " $" + Math.abs(totalBalance) : this.props.friend.username + " owes you $" + totalBalance;

    return (
      <div>

        <div className="friend-balance">
          <font color="gray">YOUR BALANCE</font>
          <br></br>
          <div className={color}>
          {message}
          </div>
        </div>

      </div>
    )
  }
}

export default FriendDetail;
