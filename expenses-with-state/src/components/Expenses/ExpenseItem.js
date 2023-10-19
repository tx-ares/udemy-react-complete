import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // useState can take two arguments, first the property name / value, second is the update function.  Conventionally called setMyPropertyName
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('new title')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;