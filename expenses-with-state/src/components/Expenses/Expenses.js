import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'
import { useState } from "react"
import ExpensesFilter from "./ExpensesFilter"

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2023')
    const [filteredList, setFilteredList] = useState(props.expenses)

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
        const filtered = []

        props.expenses.filter((expense) => {
            if (expense.date.toDateString().includes(selectedYear)) {
                filtered.push(expense)
                return true;
            } else { return false }
        })
        setFilteredList(filtered)
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    filteredList.map((expense, i) => {
                        return <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
                    })
                }
            </Card>
        </div>
    )
}

export default Expenses