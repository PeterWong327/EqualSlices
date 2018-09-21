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

    const keyId = Object.keys(this.props.bills);

    // debugger;
    const results = keyId.map(key => {
        if ((this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.friend.id === this.props.bills[key]["biller_id"])) {
          if (this.props.friend.id === this.props.bills[key]["bill_recipient_id"]) {
            return (
              <div key={key}>
                <strong>Date: {this.props.bills[key]["date"]}</strong>
                <br></br>
                <strong>Description:</strong> {this.props.bills[key]["description"]}
                  <br></br>
                  <strong>Friend:</strong> {this.props.friend.username} owes you
                    <strong>Bill Amount: $</strong>{this.props.bills[key]["balance"]}
                      <br></br>
                      <br></br>
                    </div>
                  )
          } else if (this.props.friend.id === this.props.bills[key]["biller_id"]) {
            return (
              <div key={key}>
                <strong>Date: {this.props.bills[key]["date"]}</strong>
                <br></br>
                <strong>Description:</strong> {this.props.bills[key]["description"]}
                  <br></br>
                  <strong>Friend:</strong> You owe {this.props.friend.username}
                    <strong>Bill Amount: $</strong>{this.props.bills[key]["balance"]}
                      <br></br>
                      <br></br>
                    </div>
                  )
          }
        }

    })

    return (
      <div className="dashboard-items">
        <div className="dashboard-main">
          <label className="dashboard-header">{this.props.friend.username}{dashboard_end}</label>
          <button className="dashboard-add-bill-btn" onClick={() => this.props.openModal({type: 'addBill', id: this.props.friend.id})}>Add a bill</button>
          <button className="dashboard-settle-btn" onClick={() => this.props.openModal({type: 'settleUp', id: this.props.friend.id})}>Settle up</button>
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
          {results}
        </div>
      </div>
    )
  }
}
export default Dashboard;
