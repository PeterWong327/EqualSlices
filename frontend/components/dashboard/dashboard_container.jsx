import { connect } from 'react-redux';
import React from 'react';
import Dashboard from './dashboard';
import { fetchFriend } from '../../actions/friending_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBills } from '../../actions/bill_actions';

// console.log(ownProps.match.params);
// console.log("users:", state.entities.users);

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const friend = state.entities.users[ownProps.match.params.id];
  const bills = state.entities.bills;

  return {
    currentUser,
    friend,
    bills
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFriend: id => dispatch(fetchFriend(id)),
    fetchBills: () => dispatch(fetchBills())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
