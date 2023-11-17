import './ExpenseItem.css';

function ExpenseItem({ props }) {
    const date = props.date
    const ammount = props.ammount
    const title = props.title


    return (
        <div className='expense-item'>
            <div>{date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2 >{title}</h2>
                <div className='expense-item__price' >${ammount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;