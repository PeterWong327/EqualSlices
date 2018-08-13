import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FRIENDS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND
} from '../actions/friending_actions';

const friendingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    case RECEIVE_FRIEND:
      return merge({}, state, { [action.friend.id]: action.friend} );
    case REMOVE_FRIEND:
      let newState = merge({}, state);
      delete newState[action.friendId];
      return newState;
    default:
      return state;
  }
};

export default friendingsReducer;
