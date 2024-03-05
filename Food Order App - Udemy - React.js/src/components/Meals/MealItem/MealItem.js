import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

function MealItem(props) {

    const { id, name, description, price } = props.mealItem
    return (
        <li className={classes.meal} >
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price} >${price}</div>
            </div>
            <MealItemForm mealId={id}
                mealName={name}
                mealPrice={price}
                onBump={props.onBump}
                onAdd={props.onAdd} />
        </li>
    )
}

export default MealItem
