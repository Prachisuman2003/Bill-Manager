import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill, editBill } from "../redux/actions";

function BillForm({ currentBill, setEditing }) {
  const [bill, setBill] = useState(
    currentBill || { description: "", amount: "", category: "", date: "" }
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bill.description || !bill.amount || !bill.category || !bill.date) {
      alert("Please fill in all fields");
      return;
    }

    if (currentBill) {
      dispatch(editBill(bill));
      setEditing(false);
    } else {
      dispatch(addBill({ ...bill, id: Date.now() }));
    }

    setBill({ description: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentBill ? "Edit Bill" : "Add Bill"}</h2>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={bill.description}
          onChange={(e) => setBill({ ...bill, description: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={bill.amount}
          onChange={(e) => setBill({ ...bill, amount: e.target.value })}
          required
        />
      </div>

      <div>
        <label>Category:</label>
        <select
          value={bill.category}
          onChange={(e) => setBill({ ...bill, category: e.target.value })}
          required
        >
          <option value="">Select Category</option>
          <option value="FoodNDining">Food & Dining</option>
          <option value="utility">Utility</option>
          <option value="shopping">Shopping</option>
        </select>
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          value={bill.date}
          onChange={(e) => setBill({ ...bill, date: e.target.value })}
          required
        />
      </div>

      <button type="submit">{currentBill ? "Save Changes" : "Add Bill"}</button>
    </form>
  );
}

export default BillForm;
