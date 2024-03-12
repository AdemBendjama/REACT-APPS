import React from 'react'
import classes from './Input.module.css'
function Input(props) {
    return (
        <div className={`${classes.input} ${props.error ? classes.error : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
            {props.error && props.errorMsg}
        </div>
    )
}

export default Input
