import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const onAddExpense = (newExpense) => {
        const expenseData = { ...newExpense, id: Math.random().toString() }
        // console.log(expenseData)
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpense={onAddExpense} />
        </div>
    )
}

export default NewExpense