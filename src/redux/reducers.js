const initialState = {
  bills: [],
  filteredBills: [],
  highlightedBills: [],
  filterCategory: "",
  budget: 50000,
};

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BILL":
      const updatedBills = [...state.bills, action.payload];
      return {
        ...state,
        bills: updatedBills,
        filteredBills: state.filterCategory
          ? updatedBills.filter(
              (bill) => bill.category === state.filterCategory
            )
          : updatedBills,
      };

    case "EDIT_BILL":
      const editedBills = state.bills.map((bill) =>
        bill.id === action.payload.id ? action.payload : bill
      );
      return {
        ...state,
        bills: editedBills,
        filteredBills: state.filterCategory
          ? editedBills.filter((bill) => bill.category === state.filterCategory)
          : editedBills,
      };

    case "DELETE_BILL":
      const remainingBills = state.bills.filter(
        (bill) => bill.id !== action.payload
      );
      return {
        ...state,
        bills: remainingBills,
        filteredBills: state.filterCategory
          ? remainingBills.filter(
              (bill) => bill.category === state.filterCategory
            )
          : remainingBills,
      };

    case "FILTER_CATEGORY":
      const filtered = action.payload
        ? state.bills.filter((bill) => bill.category === action.payload)
        : state.bills;

      return {
        ...state,
        filteredBills: filtered,
        filterCategory: action.payload,
      };
    case "HIGHLIGHT_BILLS":
      return {
        ...state,
        highlightedBills: action.payload,
      };

    default:
      return state;
  }
};

export default billReducer;
