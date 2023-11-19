import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        expensesTitle: '',
        expensesAmount: '',
        expensesDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => ({ ...prevState, expensesTitle: event.target.value }))
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => ({ ...prevState, expensesAmount: event.target.value }))
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => ({ ...prevState, expensesDate: event.target.value }))
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()

        let expenseData = {
            title: userInput.expensesTitle,
            amount: userInput.expensesAmount,
            date: new Date(userInput.expensesDate)
        }

        props.onFormSave(expenseData)

        setUserInput({
            expensesTitle: '',
            expensesAmount: '',
            expensesDate: ''
        })

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label >Title</label>
                    <input type="text" value={userInput.expensesTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label >Amount</label>
                    <input type="number" value={userInput.expensesAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label >Date</label>
                    <input type="date" value={userInput.expensesDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'><button type='submit' >Add Expense</button></div>
        </form>
    )
}

export default ExpenseForm;