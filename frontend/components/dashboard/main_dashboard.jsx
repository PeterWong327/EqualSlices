import React from 'react';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import MainDashboardContainer from './main_dashboard_container';


class MainDashboard extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchBills().then(() => this.setState({}))
  }

  render() {

    const apostrophe = "'s'";
    const keyId = Object.keys(this.props.bills);
    const results = keyId.map(key => {

      let friendRecipientId = this.props.bills[key]["bill_recipient_id"];
      let friendBillerId = this.props.bills[key]["biller_id"];


      if ((this.props.currentUser.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.currentUser.id === this.props.bills[key]["biller_id"])) {

        if (this.props.currentUser.id === this.props.bills[key]["bill_recipient_id"]) {
          return (
            <div key={key} className="main-dashboard-bill-details">
              <br></br>
                Date: <strong>{this.props.bills[key]["date"]}</strong>
              <br></br>
                <strong className="main-dashboard-bill-description-text">{this.props.bills[key]["description"]}</strong>
              <br></br>
                <div className="main-dashboard-bill-name-balance">
                    <strong>You</strong> owe {this.props.allUsers[friendBillerId]["username"]}
                    <strong>: ${this.props.bills[key]["balance"]}</strong>
                </div>
            </div>
          )
        } else if (this.props.currentUser.id === this.props.bills[key]["biller_id"]) {
            return (
              <div key={key} className="main-dashboard-bill-details">
                <br></br>
                Date: <strong>{this.props.bills[key]["date"]}</strong>
              <br></br>
              <strong className="main-dashboard-bill-description-text">{this.props.bills[key]["description"]}</strong>
              <br></br>
              <div className="main-dashboard-bill-name-balance">
                <strong>{this.props.allUsers[friendRecipientId]["username"]}</strong> owes you
                  <strong>: ${this.props.bills[key]["balance"]}</strong>
                </div>
              </div>
            )
          }
      }
    })

    return (
      <div className="main-dashboard">
        {this.props.currentUser.username}{apostrophe} Dashboard
        {results}
      </div>
    )
  }
}
export default MainDashboard;
