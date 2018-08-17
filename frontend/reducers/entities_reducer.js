import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import friendingsReducer from './friendings_reducer';
import billsReducer from './bills_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  friendings: friendingsReducer,
  bills: billsReducer
});

export default entitiesReducer;
