import merge from 'lodash/merge';
import {
  RECEIVE_ALL_BILLS,
  RECEIVE_BILL,
  REMOVE_BILL
} from '../actions/bill_actions';

const billsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_BILLS:
      return merge({}, state, action.bills.bills);
    case RECEIVE_BILL:
      return merge({}, state, {[action.bill.id]: action.bill});
    case REMOVE_BILL:
      let newState = merge({}, state);
      delete newState[action.billId];
      return newState;
    default:
      return state;
  }
};

export default billsReducer;
