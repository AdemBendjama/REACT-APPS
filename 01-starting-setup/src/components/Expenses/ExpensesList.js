import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expenses = props.expenses.map((expense) => <ExpenseItem expense={expense} key={expense.id} />)
    expenses = expenses.length !== 0 ? expenses : <p>No expenses found.</p>

    return (
        <>
            {expenses}
        </>
    )
}

export default ExpensesList;