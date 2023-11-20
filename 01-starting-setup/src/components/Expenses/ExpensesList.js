import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    let expenses = props.expenses.map((expense) => <ExpenseItem expense={expense} key={expense.id} />)
    expenses = expenses.length !== 0 ? expenses : <h2 className='expenses-list__fallback' >No expenses found.</h2>

    return (
        <ul className="expenses-list" >
            {expenses}
        </ul>
    )
}

export default ExpensesList;