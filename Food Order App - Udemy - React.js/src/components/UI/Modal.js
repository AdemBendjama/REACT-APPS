import React from 'react'
import classes from './Modal.module.css'
import ModalBackdrop from './ModalBackdrop'
import { createPortal } from 'react-dom'


function Modal(props) {
    const modal = createPortal(
        <>
            <ModalBackdrop onClose={props.onClose} />

            <div className={classes.modal}>
                {props.children}
            </div>
        </>, document.getElementById('overlay'))

    return modal
}

export default Modal
