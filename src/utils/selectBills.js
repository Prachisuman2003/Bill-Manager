export const selectBillsWithinBudget = (bills, budget) => {
  // Sort bills by amount (ascending)
  const sortedBills = [...bills].sort(
    (a, b) => parseFloat(a.amount) - parseFloat(b.amount)
  );

  let total = 0;
  let selectedBills = [];

  for (let bill of sortedBills) {
    if (total + parseFloat(bill.amount) <= budget) {
      total += parseFloat(bill.amount);
      selectedBills.push(bill.id);
    } else {
      break;
    }
  }

  return selectedBills;
};
