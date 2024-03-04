import React, { useRef, useImperativeHandle } from 'react'

import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {

    const inputRef = useRef(null)

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        }
    })

    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={props.type}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.value.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
})

export default Input
