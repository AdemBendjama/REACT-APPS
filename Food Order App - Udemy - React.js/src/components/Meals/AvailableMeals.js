import React from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'

const mealsData = [
    {
        id: 'sushi',
        name: 'Sushi',
        description: 'Fresh fish and veggies',
        price: 22.99
    },
    {
        id: 'schnitzel',
        name: 'Schnitzel',
        description: 'A german speciality!',
        price: 16.50
    },
    {
        id: 'barbecue-burger',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99
    },
    {
        id: 'green-bowl',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99
    }
]
function AvailableMeals(props) {

    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    {mealsData.map((meal) => <MealItem key={meal.id}
                        mealItem={meal}
                        onBump={props.onBump}
                        onAdd={props.onAdd} />)}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableMeals
