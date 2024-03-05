import React, { useContext } from 'react'
import classes from './Modal.module.css'
import CartContext from '../../store/cart-context'

function ModalBackdrop(props) {

    const context = useContext(CartContext)

    return (
        <div className={classes.backdrop} onClick={context.onToggle} />
    )
}

export default ModalBackdrop
