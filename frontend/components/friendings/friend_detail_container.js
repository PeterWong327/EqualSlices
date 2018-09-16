import { connect } from 'react-redux';
import FriendDetail from './friend_detail';
import { fetchFriend } from '../../actions/friending_actions';

const mapStateToProps = (state, ownProps) => {
  const currId = state.session.id;
  const friend = state.entities.friendings[ownProps.match.params.friendId];

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
