export const fetchBills = () => {
  return $.ajax({
    method: "GET",
    url: '/api/bills'
  });
};

export const fetchBill = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/bills/${id}`
  });
};

export const createBill = (bill) => {
  return $.ajax({
    method: "POST",
    url: '/api/bills',
    data: { bill }
  });
};

export const updateBill = (bill) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/bills/${bill.id}`,
    date: { bill }
  });
};

export const deleteBill = (id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/bills/${id}`
  });
};
