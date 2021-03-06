import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import AddBillFormContainer from '../bills/add_bill_form_container';
import SettleBillContainer from '../bills/settle_bill_container';
import {clearErrors} from '../../actions/session_actions';

function Modal({modal, closeModal}) {

  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'addBill':
      component = <AddBillFormContainer test="helloooooooooo"/>;
      break;
    case 'settleUp':
      component = <SettleBillContainer />;
      break;
    default:
      return null;
  }

  if (modal.type === 'login') {
    return (
      <div className="login-modal-background" onClick={closeModal}>
        <div className="login-modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }

  if (modal.type === 'addBill') {
    return (
      <div className="addBill-modal-background" onClick={closeModal}>
        <div className="addBill-modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }

  if (modal.type === 'settleUp') {
    return (
      <div className="addBill-modal-background" onClick={closeModal}>
        <div className="addBill-modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }



}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
      dispatch(clearErrors());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
