import React from 'react'
import classes from './MealsSummary.module.css'
function MealsSummary() {
    return (
        <section className={classes.summary}>
            <h2>Delicious Meals, Delivered to Your Door</h2>
            <p>
                Select your favorite dish from our diverse menue from all around the world !
            </p>
            <p>
                All of our food is fresh made by the best chefs in the field
            </p>
        </section>
    )
}

export default MealsSummary
