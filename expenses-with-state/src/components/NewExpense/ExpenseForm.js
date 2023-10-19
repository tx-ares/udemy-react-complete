import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // For this example, I am using a single state object to manange all input values
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, title: event.target.value }
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, amount: event.target.value }
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, date: event.target.value }
    //     })
    // }

    const inputChangeHandler = (type, value) => {
        if (type === 'title') {
            setTitle(value)
        } else if (type === 'date') {
            setDate(value)
        } else if (type === 'amount') {
            setAmount(value)
        }
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>{userInput.title}</label>
                    <input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>{userInput.amount}</label>
                    <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)} />
                </div>
                <div className='new-expense__control'>
                    <label>{userInput.date}</label>
                    <input type="date" min="2023-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler('date', event.target.value)} />
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm