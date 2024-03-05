import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'



function Cart(props) {

    const cartItems = props.cartItems.map((item) => {
        return (
            <CartItem key={item.id} cartItem={{ id: item.id, name: item.name, price: item.price, amount: item.amount }} />
        )
    })

    const totalAmount = props.cartItems.reduce((total, item) => {
        return (
            total + (item.price * item.amount)
        )
    }, 0)

    const formattedAmmount = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(totalAmount)

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <h2>Total Amount</h2>
                <div>{formattedAmmount}</div>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
