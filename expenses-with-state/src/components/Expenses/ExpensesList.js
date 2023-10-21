import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
    
    if (props.expenses.length === 0 ) {
        return <h2 className="filter-message">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {props.expenses.map((expense, i) => {
                return <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
            })}
        </ul>
     )
}

export default ExpensesList