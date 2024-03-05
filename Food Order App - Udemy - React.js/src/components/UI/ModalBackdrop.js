import React from 'react'
import classes from './Modal.module.css'

function ModalBackdrop(props) {
    return (
        <div className={classes.backdrop} onClick={props.onClick} />
    )
}

export default ModalBackdrop
