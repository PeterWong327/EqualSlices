import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchFriend } from '../../actions/friending_actions';

// console.log(ownProps.match.params);
// console.log("users:", state.entities.users);

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const currentUser = state.entities.users[currentUserId];
  const friend = state.entities.users[ownProps.match.params.id];


  return {
    currentUser,
    friend
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
