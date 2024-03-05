import React from 'react'
import classes from './HeaderCartButton.module.css'
import cartSVG from '../../assets/cart.svg'

function HeaderCartButton(props) {

    return (
        <>
            <button onClick={props.onShow} className={`${classes.button} ${props.isBumped ? classes.bump : ''}`}>
                <img src={cartSVG} className={classes.icon} alt='Cart Icon' />
                Your Cart
                <div className={classes.badge}>{props.itemQuantity}</div>
            </button >
        </>
    )
}

export default HeaderCartButton
