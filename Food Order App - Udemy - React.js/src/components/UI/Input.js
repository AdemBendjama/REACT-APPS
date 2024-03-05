import React from 'react'
import classes from './Input.module.css'
function Input(props) {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>Amount</label>
            <input
                id={props.id}
                name={props.name}
                type={props.type}
                value={props.value}
                onChange={props.onChange}
                min={1}
            />
        </div>
    )
}

export default Input
