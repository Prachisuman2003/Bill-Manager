import React from "react";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../redux/actions";

const FilterDropdown = () => {
  const dispatch = useDispatch();

  return (
    <select onChange={(e) => dispatch(filterByCategory(e.target.value))}>
      <option value="">All</option>
      <option value="FoodNDining">Food & Dining</option>
      <option value="utility">Utility</option>
      <option value="shopping">Shopping</option>
    </select>
  );
};

export default FilterDropdown;
