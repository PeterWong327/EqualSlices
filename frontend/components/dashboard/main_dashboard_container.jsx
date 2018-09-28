import { connect } from 'react-redux';
import React from 'react';
import MainDashboard from './main_dashboard';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBills } from '../../actions/bill_actions';


const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const bills = state.entities.bills;
  const allUsers = state.entities.users;

  return {
    currentUser,
    bills,
    allUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchBills: () => dispatch(fetchBills())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainDashboard);
