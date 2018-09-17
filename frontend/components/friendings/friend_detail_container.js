import { connect } from 'react-redux';
import FriendDetail from './friend_detail';
import { fetchFriend } from '../../actions/friending_actions';
// const friend = state.entities.friendings[ownProps.match.params.id];

const mapStateToProps = (state, ownProps) => {

  const friend = state.entities.users[ownProps.match.params.id];

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
