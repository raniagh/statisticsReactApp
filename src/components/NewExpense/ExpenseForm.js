import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //two methods for changing form fields values
  // first one each field in a state
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // second method put all fields together
  /*const [userInput, setUserInput] = useState({
    titleInput: "",
    amountInput: "",
    dateInput: "",
  });*/

  const titleChangeHandler = (event) => {
    //first method
    setTitle(event.target.value);

    //Second method: use spread operator
    /*setUserInput({
      ...userInput,
      titleInput: event.target.value,
    });*/

    //Third method: use previous state
    /*setUserInput((prevState) => {
      return { prevState, titleInput: event.target.value };
    });*/
    //The difference between the second and third is the last is more sure to work at the last
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const addExpenseHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <div>
      <form onSubmit={addExpenseHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={date}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button type="submit" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
export default ExpenseForm;
