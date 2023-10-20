import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.expenses.map((expense, i) => {
                    return <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
                })}
            </Card>
        </div>
    )
}

export default Expenses