import React from 'react'
import classes from './Modal.module.css'
import ModalBackdrop from './ModalBackdrop'
import { createPortal } from 'react-dom'


function Modal({ children }) {

    const modal = createPortal(
        <>
            <ModalBackdrop />

            <div className={classes.modal}>
                {children}
            </div>
        </>, document.getElementById('overlay'))

    return modal
}

export default Modal

