import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import AddBillForm from './add_bill_form';
import { openModal, closeModal } from '../../actions/modal_actions';

// otherForm: (
//   <button onClick={() => dispatch(openModal('addBill'))}>
//     Add Bill
//   </button>
// ),
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
