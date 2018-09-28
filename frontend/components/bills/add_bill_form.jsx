import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';

// <label className="add-bill-billee">
//   <input
//     className="add-bill-billee-input"
//     type="text1"
//     placeholder="Friend ID"
//     value={this.state.bill.bill_receipient_id}
//     onChange={this.update('bill_recipient_id')}
//     />
// </label>



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
        bill_recipient_id: this.props.friendId,
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="add-bill-form-container">


        <form onSubmit={this.handleSubmit}>
          <div className="add-bill-header">Add a Bill</div>

          <div onClick={this.props.closeModal} className="add-bill-x-btn">x</div>

          <br></br>
            <label className="add-bill-description">
              <input
                className="add-bill-description-input"
                type="text1"
                placeholder="Enter a description"
                value={this.state.bill.description}
                onChange={this.update('description')}
                />
            </label>

          <br></br>
          <br></br>

            <label className="add-bill-amount">$
              <input
                className="add-bill-amount-input"
                type="text1"
                placeholder="0.00"
                value={this.state.bill.amount}
                onChange={this.update('balance')}
                />
            </label>

            <br></br>
            <br></br>

            <label className="add-bill-date">
              <input
                className="add-bill-date-input"
                type="date"
                placeholder="Date"
                value={this.state.bill.date}
                onChange={this.update('date')}
                />
            </label>

            <div className="add-bill-modal-btns">
              <input
                className="add-bill-cancel-btn"
                type="submit"
                value="Cancel"
                onClick={this.props.closeModal}
                />

              <input
                className="add-bill-btn"
                type="submit"
                value="Save Bill!"
                onClick={() => {this.props.createBill(this.state.bill)}}
              />

            </div>

        </form>



      </div>
    );
  }
};

export default AddBillForm;
