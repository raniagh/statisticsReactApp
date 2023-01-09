import { useState } from "react";
import Card from "../../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const filterHandler = (selecteYear) => {
    setSelectedYear(selecteYear);
  };

  const filterdExpenses = props.expenses.filter(
    (el) => el.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilter={filterHandler} />
      <ExpensesChart expenses={filterdExpenses} />
      <ExpensesList items={filterdExpenses} />
    </Card>
  );
};

export default Expenses;
