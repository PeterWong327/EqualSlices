import { connect } from 'react-redux';
import { createFriend } from '../../actions/friending_actions';
import Search from './friend_search';

// const mapStateToProps = state => {
//   const users = Object.values(state.entities.users);
//   return {
//     users
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createFriend: email => dispatch(createFriend(email))
  };
};

export default connect(null, mapDispatchToProps)(Search);
