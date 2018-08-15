import { connect } from 'react-redux';
import { createFriend } from '../../actions/friending_actions';
import Search from './friend_search';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createFriend: email => dispatch(createFriend(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
