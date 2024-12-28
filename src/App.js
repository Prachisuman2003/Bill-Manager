import React from "react";
import BillList from "./components/BillList";
import BillChart from "./components/BillChart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bill Manager</h1>
      <BillList />
      <BillChart />
    </div>
  );
}

export default App;
