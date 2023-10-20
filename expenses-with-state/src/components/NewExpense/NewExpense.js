import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const onAddExpense = (newExpense) => {
        const expenseData = { ...newExpense, id: Math.random().toString() }
        props.onAddExpense(expenseData)
        debugger
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onAddExpense={onAddExpense} />
        </div>
    )
}

export default NewExpense