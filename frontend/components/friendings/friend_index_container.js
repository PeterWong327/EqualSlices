import { connect } from 'react-redux';
import { fetchFriends, deleteFriend } from '../../actions/friending_actions';
import FriendIndex from './friend_index';

const mapStateToProps = state => ({
  friends: Object.values(state.friends)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchFriends: () => dispatch(fetchFriends()),
    deleteFriend: id => dispatch(deleteFriend(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendIndex);
