import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';
import {clearErrors} from '../../actions/session_actions';
import { fetchFriend } from '../../actions/friending_actions';

// currentUser: users[session.id]
const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const friend = state.entities.users[ownProps.match.params.id];

  return {
    friend,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFriend: id => dispatch(fetchFriend(id)),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
