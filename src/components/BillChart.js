import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import "./BillChart.css";

// Helper to group bills by month
const groupBillsByMonth = (bills) => {
  const grouped = bills.reduce((acc, bill) => {
    const date = new Date(bill.date);
    const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;

    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += parseFloat(bill.amount);
    return acc;
  }, {});

  return Object.entries(grouped).map(([month, total]) => ({
    month,
    total,
  }));
};

function BillChart() {
  const bills = useSelector((state) => state.bills);
  const data = groupBillsByMonth(bills);

  return (
    <div className="chart-container">
      <h2>Monthly Billing Cycle</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BillChart;
