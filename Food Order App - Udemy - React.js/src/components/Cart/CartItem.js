import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {

    const { name, price, amount } = props.cartItem
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>${price}</div>
                    <div className={classes.amount}>x {amount}</div>
                </div>
            </div>
            <div className={classes.actions}>
                <button >-</button>
                <button >+</button>
            </div>
        </li>
    )
}

export default CartItem
