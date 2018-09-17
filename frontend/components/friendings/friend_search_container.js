import { connect } from 'react-redux';
import { createFriend } from '../../actions/friending_actions';
import Search from './friend_search';

import {clearErrors} from '../../actions/session_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFriend: email => dispatch(createFriend(email)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
