import React, { useState } from 'react'
import classes from './HeaderCartButton.module.css'
import cartSVG from '../../assets/cart.svg'

function HeaderCartButton() {
    const [isBumped, setIsBumped] = useState(null)

    const handleBump = (event) => {
        setIsBumped(true)
        setTimeout(() => {
            setIsBumped(false)
        }, 300);
    }

    return (
        <>
            <button onClick={handleBump} className={`${classes.button} ${isBumped ? classes.bump : ''}`}>
                <img src={cartSVG} className={classes.icon} alt='Cart Icon' />
                Your Cart
                <div className={classes.badge}>5</div>
            </button >
        </>
    )
}

export default HeaderCartButton
