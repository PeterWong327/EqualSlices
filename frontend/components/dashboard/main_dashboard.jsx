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
      // console.log("keyID daajklhajklfhsjdkfhsdkfhsfhslfs");
      // console.log(key);
      // console.log("keys here ^^^^^^^^^^^^^^^^^^^^^^^^^^");



      if ((this.props.currentUser.id === this.props.bills[key]["bill_recipient_id"]) || (this.props.currentUser.id === this.props.bills[key]["biller_id"])) {
        let friendRecipientId = this.props.bills[key]["bill_recipient_id"];
        let friendBillerId = this.props.bills[key]["biller_id"];

        // console.log(this.props.currentUser.id)
        // console.log("here is the current user's id ^^^^^^^^^^");
        // console.log(this.props.bills[key]["bill_recipient_id"]);
        // console.log("here is the bill recipient id  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        // console.log(this.props.allUsers[friendRecipientId]['id']);
        // console.log("here is the id of the recipient");
        // console.log(this.props.allUsers[friendBillerId]['id']);
        // console.log("here is the id of the biller");

        if (this.props.currentUser.id === this.props.allUsers[friendRecipientId]["id"]) {
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
