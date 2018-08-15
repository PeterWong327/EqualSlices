import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

// otherForm: (
//   <button onClick={() => dispatch(openModal('signup'))}>
//     Signup
//   </button>
// ),
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Log in to EqualSlices',
    navLink: <Link to="/signup">Sign up</Link>
  }
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    demoLogin: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
