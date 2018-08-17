import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Splash from './splash';
import { openModal } from '../../actions/modal_actions';
import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => {
    dispatch(openModal(modal));
    dispatch(clearErrors());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
