import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendingsReducer from './friendings_reducer';

export default combineReducers({
  users: usersReducer,
  friendings: friendingsReducer
});
