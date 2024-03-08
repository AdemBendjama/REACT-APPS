import React from 'react'
import classes from './Spinner.module.css'
function Spinner() {
    return (
        <div className="spinner-container">
            <div className={classes.spinner}></div>
        </div>
    )
}

export default Spinner
