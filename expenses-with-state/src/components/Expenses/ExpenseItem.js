import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // // useState can take two arguments, first the property name / value, second is the update function.  Conventionally called setMyPropertyName
  // // Important to note, that when useState is called, it only initalizes the value ONCE. If this component is ever rendered ( when this component JSX rendering code is ran ), React will detect if State was used in the component and grab the latest state for this component instead of reinitializing it

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
