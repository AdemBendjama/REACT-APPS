import './ExpenseDate.css'

function ExpenseDate(props) {
    const date = {
        month: props.date.toLocaleString('en-US', { month: 'long' }),
        year: props.date.toLocaleString('en-US', { day: '2-digit' }),
        day: props.date.getFullYear(),
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