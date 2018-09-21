import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import AddBillForm from './add_bill_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createBill, fetchBills } from '../../actions/bill_actions';
import { fetchFriend } from '../../actions/friending_actions';
// import { withRouter } from 'react-router-dom';

// console.log(ownProps.match.params);

// const friend = state.entities.users[ownProps.match.params.id];
const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const friendId = state.ui.modal.id;
  // debugger



  return {
    currentUser,
    friendId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBills: () => dispatch(fetchBills()),
    createBill: bill => dispatch(createBill(bill)),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFriend: id => dispatch(fetchFriend(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
