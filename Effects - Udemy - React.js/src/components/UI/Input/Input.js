import React from 'react'

import classes from './Input.module.css'
function Input(props) {
    return (
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={props.type}>{props.label}</label>
            <input
                type={props.type}
                id={props.value.id}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}

export default Input
