import * as APIUtil from '../util/friending_api_util';

export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const fetchFriends = () => dispatch => (
  APIUtil.fetchFriends().then((friends) => dispatch(receiveAllFriends(friends)))
);

export const fetchFriend = (id) => dispatch => (
  APIUtil.fetchFriend(id).then((friend) => dispatch(receiveFriend(friend)))
);

export const createFriend = (friend) => dispatch => (
  APIUtil.createFriend(friend).then((friend) => dispatch(receiveFriend(friend)))
);

export const deleteFriend = (id) => dispatch => (
  APIUtil.deleteFriend(id).then((friend) => dispatch(removeFriend(friend)))
);

const receiveAllFriends = payload => ({
  type: RECEIVE_ALL_FRIENDS,
  payload
});

const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});

const removeFriend = friendId => ({
  type: REMOVE_FRIEND,
  friendId
});