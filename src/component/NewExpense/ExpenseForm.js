import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");
  const titlechangeHandler = (event) => {
    setEnterdTitle(event.target.value);
  };
  const amountchangeHandler = (event) => {
    setEnterdAmount(event.target.value);
  };
  const datechangeHandler = (event) => {
    setEnterdDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate)
    };
    props.onSaveExpenseData(expenseData);
    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value="enterdTitle"
            onChange={titlechangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value="enterdAmount"
            onChange={amountchangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value="enterdDate" onChange={datechangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
