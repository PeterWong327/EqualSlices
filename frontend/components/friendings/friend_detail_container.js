import { connect } from 'react-redux';
import FriendDetail from './friend_detail';
import { fetchFriend } from '../../actions/friending_actions';

const mapStateToProps = (state, ownProps) => {
  const friend = state.entities.friend[ownProps.match.params.friendId];

  return {
    friend
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriend: id => dispatch(fetchFriend(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendDetail);
