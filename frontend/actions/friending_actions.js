import * as APIUtil from '../util/friending_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const fetchFriends = () => dispatch => (
  APIUtil.fetchFriends().then((friends) => dispatch(receiveAllFriends(friends)))
);

export const fetchFriend = (id) => dispatch => (
  APIUtil.fetchFriend(id).then((user) => dispatch(receiveFriend(user)))
);

export const createFriend = (email) => dispatch => (
  APIUtil.createFriend(email).then((user) => (dispatch(receiveFriend(user))
  ), err => (
  dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteFriend = (id) => dispatch => (
  APIUtil.deleteFriend(id).then((friend) => dispatch(removeFriend(friend)))
);

const receiveAllFriends = payload => ({
  type: RECEIVE_ALL_FRIENDS,
  payload
});

const receiveFriend = payload => ({
  type: RECEIVE_FRIEND,
  payload
});

const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId
});

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
