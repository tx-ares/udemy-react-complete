import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const onAddExpense = (newExpense) => {
    const expenseData = { ...newExpense, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = () => {
    setShowExpenseForm(true);
  };

  const hideExpenseForm = () => {
    setShowExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showExpenseForm && (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
      {showExpenseForm && (
        <ExpenseForm onAddExpense={onAddExpense} onCancel={hideExpenseForm} />
      )}
    </div>
  );
};

export default NewExpense;
