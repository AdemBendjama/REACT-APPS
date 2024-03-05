import React from 'react'
import classes from './Input.module.css'
function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value} />
        </div>
    )
}

export default Input
