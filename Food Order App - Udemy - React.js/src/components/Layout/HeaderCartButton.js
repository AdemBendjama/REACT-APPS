import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import cartSVG from '../../assets/cart.svg'
import CartContext from '../../store/cart-context'

function HeaderCartButton() {

    const context = useContext(CartContext)

    return (
        <>
            <button onClick={context.onToggle} className={`${classes.button} ${context.isBumped ? classes.bump : ''}`}>
                <img src={cartSVG} className={classes.icon} alt='Cart Icon' />
                Your Cart
                <div className={classes.badge}>{context.itemQuantity}</div>
            </button >
        </>
    )
}

export default HeaderCartButton
