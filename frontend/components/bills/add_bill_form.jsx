import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

// componentDidMount() {
//   this.props.fetchFriend(this.props.match.params.id)
// }

class AddBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bill: {
        balance: "",
        biller_id: this.props.currentUser.username,
        bill_recipient_id: "",
        description: "",
        date: ""
      }
    }

    this.handleSubmit = this.update.bind(this);
  }


  openModal(field) {
    return(e) => {
      this.props.openModal(field);
    };
  }

  update(field) {
    return (e) => {
      this.state.bill[field]=e.currentTarget.value;
      this.setState({});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBill(this.state.bill)
    e.target.reset();
  }

  render() {

    return (
      <div className="add-bill-form-container">


        <form onSubmit={this.handleSubmit}>
        This is the bill form
          <div onClick={this.props.closeModal} ></div>

          <label className="add-bill-amount">Bill Amount
            <input
              className="add-bill-amount-input"
              type="text"
              value={this.state.bill.amount}
              onChange={this.update('balance')}
              />
          </label>

          <br></br>

          <label className="add-bill-billee">Friend
            <input
              className="add-bill-billee-input"
              type="text"
              value={this.state.bill.bill_receipient_id}
              onChange={this.update('bill_recipient_id')}
              />
          </label>

          <br></br>

            <label className="add-bill-description">Description
              <input
                className="add-bill-description-input"
                type="text"
                value={this.state.bill.description}
                onChange={this.update('description')}
                />
            </label>

            <br></br>

            <label className="add-bill-date">Date
              <input
                className="add-bill-date-input"
                type="text"
                value={this.state.bill.date}
                onChange={this.update('date')}
                />
            </label>

          <input
            className="add-bill-btn"
            type="submit"
            value="Save Bill!"
            onClick={() => {this.props.createBill(this.state.bill)}}
          />



          <input
            className="settle-bill-cancel-btn"
            type="submit"
            value="Cancel"
            onClick={this.props.closeModal}
            />

        </form>



      </div>
    );
  }
};

export default AddBillForm;
