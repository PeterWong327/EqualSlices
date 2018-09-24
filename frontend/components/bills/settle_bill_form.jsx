import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';


class SettleBillForm extends React.Component {
  constructor(props) {
    super(props);
  }

  openModal(field) {
    return(e) => {
      this.props.openModal(field);
    };
  }

  render() {
    return (
      <div className="settle-bill-form-container">
        <div className="settle-bill-header">Settle Up</div>
        <br></br>
        <div className="settle-bill-prompt">
          Choose a payment method
        </div>
        <div onClick={this.props.closeModal} ></div>


        <div className="payment-btns">
          <input
            className="cash-btn"
            type="submit"
            value="Record a cash payment"
          />
  <br></br>

          <input
            className="square-cash-btn"
            type="submit"
            value="Square Cash"
          />

<br></br>

          <input
            className="venmo-btn"
            type="submit"
            value="Venmo!"
          />
        </div>

      <div className="settle-bill-cancel-save">
        <input
          className="settle-bill-cancel-btn"
          type="submit"
          value="Cancel"
          onClick={this.props.closeModal}
          />

        <input
          className="settle-bill-save-btn"
          type="submit"
          value="Save"
          />

      </div>



      </div>
    );
  }
};

export default SettleBillForm;
