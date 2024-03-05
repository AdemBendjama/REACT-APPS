import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'

function Cart(props) {


    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                <CartItem key='sushi' cartItem={{ id: 'sushi', name: 'Sushi', price: 23.00, amount: 2 }} />
                <CartItem key='barbecue-burger' cartItem={{ id: 'barbecue-burger', name: 'Barbecue Burger', price: 12.99, amount: 1 }} />
            </ul>
            <div className={classes.total}>
                <h2>Total Amount</h2>
                <div>$55.99</div>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes['button']}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
