import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

import {
  RECEIVE_ALL_FRIENDS,
  RECEIVE_FRIEND
} from '../actions/friending_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    case RECEIVE_ALL_FRIENDS:
      return merge({}, state, action.payload.users);
    case RECEIVE_FRIEND:
      return merge({}, state, action.users);
    default:
      return state;
  }
};

export default usersReducer;
