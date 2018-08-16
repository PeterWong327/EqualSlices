import * as APIUtil from '../util/bill_api_util';

export const RECEIVE_ALL_BILLS = "RECEIVE_ALL_BILLS";
export const RECEIVE_BILL = "RECEIVE_BILL";
export const REMOVE_BILL = "REMOVE_BILL";

export const fetchBills = () => dispatch => (
  APIUtil.fetchBills().then((bills) => dispatch(receiveAllBills(bills)))
);

export const fetchBill = (id) => dispatch => (
  APIUtil.fetchBill(id).then((bill) => dispatch(receiveBill(bill)))
);

export const createBill = (bill) => dispatch => (
  APIUtil.createBill(bill).then((bill) => dispatch(receiveBill(bill)))
);

export const updateBill = (bill) => dispatch => (
  APIUtil.updateBill(bill).then((bill) => dispatch(receiveBill(bill)))
);

export const deleteBill = (id) => dispatch => (
  APIUtil.deleteBill(id).then((bill) => dispatch(removeBill(bill)))
);

const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

const receiveAllBills = bills => ({
  type: RECEIVE_ALL_BILLS,
  bills
});

const removeBill = billId => ({
  type: REMOVE_BILL,
  billId
});
