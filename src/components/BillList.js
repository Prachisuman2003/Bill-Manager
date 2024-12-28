import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill, filterByCategory, highlightBills } from "../redux/actions";
import { selectBillsWithinBudget } from "../utils/selectBills";
import BillForm from "./BillForm";

function BillList() {
  const bills = useSelector((state) =>
    state.filteredBills.length ? state.filteredBills : state.bills
  );
  const highlightedBills = useSelector((state) => state.highlightedBills);
  const budget = useSelector((state) => state.budget);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [currentBill, setCurrentBill] = useState(null);

  const handleEdit = (bill) => {
    setEditing(true);
    setCurrentBill(bill);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this bill?")) {
      dispatch(deleteBill(id));
    }
  };

  const handleHighlight = () => {
    const selected = selectBillsWithinBudget(bills, budget);
    dispatch(highlightBills(selected));
  };

  return (
    <div>
      {editing ? (
        <BillForm currentBill={currentBill} setEditing={setEditing} />
      ) : (
        <>
          <h2>Bill List</h2>
          <div>
            <label>Filter by Category:</label>
            <select
              onChange={(e) => dispatch(filterByCategory(e.target.value))}
            >
              <option value="">All</option>
              <option value="FoodNDining">Food & Dining</option>
              <option value="utility">Utility</option>
              <option value="shopping">Shopping</option>
            </select>
            <button onClick={handleHighlight}>
              Highlight Bills Within Budget
            </button>
          </div>
          <ul>
            {bills.map((bill) => (
              <li
                key={bill.id}
                style={{
                  backgroundColor: highlightedBills.includes(bill.id)
                    ? "#c8facd"
                    : "#f9f9f9",
                }}
              >
                {bill.description} - ${bill.amount} ({bill.category})
                <button onClick={() => handleEdit(bill)}>Edit</button>
                <button onClick={() => handleDelete(bill.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <BillForm />
        </>
      )}
    </div>
  );
}

export default BillList;
