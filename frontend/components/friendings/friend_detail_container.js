import { connect } from 'react-redux';
import FriendDetail from './friend_detail';
import { fetchFriend } from '../../actions/friending_actions';
import { fetchBills } from '../../actions/bill_actions';
// const friend = state.entities.friendings[ownProps.match.params.id];

const mapStateToProps = (state, ownProps) => {

  const friend = state.entities.users[ownProps.match.params.id];
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const bills = state.entities.bills;

  return {
    currentUser,
    friend,
    bills
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriend: id => dispatch(fetchFriend(id)),
    fetchBills: () => dispatch(fetchBills())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail);
