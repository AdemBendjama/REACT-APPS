import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem() {
    return (
        <li className={classes.meal}>
            <div>
                <h3>Sushi</h3>
                <div className={classes.description}>Finest Fish and veggies</div>
                <div className={classes.price} >$24.99</div>
            </div>
            <MealItemForm />
        </li>
    )
}

export default MealItem
