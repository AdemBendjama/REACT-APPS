import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

function MealItemForm() {
    return (
        <div className={classes.form}>
            <form action="" >
                <Input
                    id='sushi'
                    name='sushi'
                    label='Sushi'
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
