import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
function AvailableMeals() {
    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    <MealItem />
                    <MealItem />
                    <MealItem />
                </ul>
            </Card>
        </div>
    )
}

export default AvailableMeals
