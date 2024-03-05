import React from 'react'
import classes from './CartItem.module.css'

function CartItem(props) {

    const { id, name, price, amount } = props.cartItem

    const handleAddItem = () => {
        props.onAdd(id, name, parseFloat(price), 1)
    }

    const handleRemoveItem = () => {
        props.onRemove(id)
    }

    return (
        <li className={classes['cart-item']} key={id}>
            <div>
                <h2>{name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>${price}</div>
                    <div className={classes.amount}>x {amount}</div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={handleRemoveItem} >-</button>
                <button onClick={handleAddItem} >+</button>
            </div>
        </li>
    )
}

export default CartItem
