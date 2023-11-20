import { useState } from 'react'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (event) => setFilteredYear(event.target.value);

    const expenses = props.expenses
        .filter((expense) => expense.date.getFullYear().toString() === filteredYear)

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </Card >
    )
}

export default Expenses;