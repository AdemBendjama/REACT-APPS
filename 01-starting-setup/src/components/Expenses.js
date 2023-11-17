import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from './Card'
function Expenses({ props }) {
    const expenses = props.map((expense) => {
        return (
            <ExpenseItem props={expense} key={expense.id}></ExpenseItem>
        )
    })


    return (
        <Card className='expenses'>
            {expenses}
        </Card >
    )
}

export default Expenses;