import React, { useContext, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../../store/cart-context'

function MealItemForm(props) {

    const context = useContext(CartContext)

    const [amountState, setAmountState] = useState(1)

    const handleAmountChange = (event) => {
        setAmountState(event.target.value)
    }

    const handleAddSubmit = (event) => {
        event.preventDefault()
        context.onAdd(props.mealId, props.mealName, parseFloat(props.mealPrice), parseInt(amountState))
    }

    return (
        <div className={classes.form}>
            <form onSubmit={handleAddSubmit} >
                <Input
                    id={props.mealId}
                    name={props.mealId}
                    type='number'
                    value={amountState}
                    onChange={handleAmountChange}
                />
                <button type='submit'>
                    + Add</button>
            </form>
        </div>
    )
}

export default MealItemForm
