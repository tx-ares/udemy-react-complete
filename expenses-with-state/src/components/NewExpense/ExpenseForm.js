import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // const [title, setTitle] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState('')

    // For this example, I am using a single state object to manange all input values
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        props.onAddExpense(userInput)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={userInput.date} min="2023-01-01" max="2023-12-31" onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Save Expense</button>
                    <button type="button" onClick={props.onCancel}>Clear</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm