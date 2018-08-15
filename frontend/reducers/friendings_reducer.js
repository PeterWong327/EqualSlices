import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import {
  RECEIVE_ALL_FRIENDS,
  RECEIVE_FRIEND,
  REMOVE_FRIEND
} from '../actions/friending_actions';

const friendingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return merge({}, state, action.payload.friendings);
    case LOGOUT_CURRENT_USER:
      return {};
    case RECEIVE_FRIEND:
      return merge({}, state, action.payload.friending);
    // return merge({}, state { [action.payload.users.id]: action.payload.users });
    // case REMOVE_FRIEND:
    //   let newState = merge({}, state);
    //   delete newState[action.friendId];
    //   return newState;
    default:
      return state;
  }
};

export default friendingsReducer;
