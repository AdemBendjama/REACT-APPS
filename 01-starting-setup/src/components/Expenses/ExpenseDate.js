import './ExpenseDate.css'

function ExpenseDate({ props }) {
    const date = {
        month: props.toLocaleString('en-US', { month: 'long' }),
        year: props.toLocaleString('en-US', { day: '2-digit' }),
        day: props.getFullYear(),
    }

    return (
        <div className='expense-date' >
            <div className='expense-date__month'>{date.month}</div>
            <div className='expense-date__year'>{date.year}</div>
            <div className='expense-date__day'>{date.day}</div>
        </div>
    )
}

export default ExpenseDate;