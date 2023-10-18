import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 10, 18);
    const expenseTitle = 'Phone Bill'
    const expenseAmount = '135.50'

    return (<div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{expenseTitle}</h2>
            <div className="expense-item__price">{expenseAmount}</div>
        </div>
    </div>)

}

export default ExpenseItem;