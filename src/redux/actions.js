export const addBill = (bill) => ({
  type: "ADD_BILL",
  payload: bill,
});

export const editBill = (bill) => ({
  type: "EDIT_BILL",
  payload: bill,
});

export const deleteBill = (id) => ({
  type: "DELETE_BILL",
  payload: id,
});

export const filterByCategory = (category) => ({
  type: "FILTER_CATEGORY",
  payload: category,
});

export const highlightBills = (billIds) => ({
  type: "HIGHLIGHT_BILLS",
  payload: billIds,
});
