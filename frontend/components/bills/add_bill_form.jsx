import React from 'react';
import { openModal, closeModal } from '../../actions/modal_actions';


class AddBillForm extends React.Component {
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
      <div className="add-bill-form-container">
        This is the bill form
        <div onClick={this.props.closeModal} ></div>

        <input
          className="add-bill-btn"
          type="submit"
          value="Add Bill!"

        />

      </div>
    );
  }
};

export default AddBillForm;
