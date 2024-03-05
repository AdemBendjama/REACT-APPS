import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

function MealItemForm(props) {
    return (
        <div className={classes.form}>
            <form action="" >
                <Input
                    id={props.mealId}
                    name={props.mealId}
                    label={props.mealName}
                    type='number'
                    value='1'
                />
                <button>
                    + Add</button>
            </form>
        </div>
    )
}

export default MealItemForm
