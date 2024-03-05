import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton itemQuantity={props.itemQuantity}
                    isBumped={props.isBumped}
                    onShow={props.onShow}
                    onAdd={props.onAdd} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food in a restaurant" />
            </div>
        </>
    )
}

export default Header
