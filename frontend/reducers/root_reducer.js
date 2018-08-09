import { combineReducers } from 'redux';

import entities from './entities/reducer';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers ({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer
});

export default rootReducer;
