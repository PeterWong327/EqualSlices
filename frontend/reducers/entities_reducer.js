import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendingsReducer from './friendings_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendings: friendingsReducer
});

export default entitiesReducer;
