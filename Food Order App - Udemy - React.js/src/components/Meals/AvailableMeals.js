import React, { useEffect, useState } from 'react'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card'
import useFetch from '../../hooks/fetch-hook'

function AvailableMeals() {
    const { error, isLoading, fetchRequest } = useFetch()
    const [meals, setMeals] = useState([])

    const formatData = (data) => {
        let meals = []
        for (const key in data) {
            meals.push({
                id: data[key].id,
                name: data[key].name,
                description: data[key].description,
                price: data[key].price,
            })
        }
        setMeals(meals)
    }

    useEffect(() => {
        fetchRequest(
            {
                method: "GET",
                url: "https://react-http-43d61-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
            },
            formatData
        )

    }, [])

    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    {meals.map((meal) => <MealItem key={meal.id}
                        mealItem={meal} />)}
                </ul>
            </Card>
        </div>
    )
}

export default AvailableMeals
