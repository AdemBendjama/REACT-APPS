import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'
function MainHeader() {
    const activeHandler = ({ isActive }) => {
        return isActive ? classes.active : ''
    }

    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to='' className={activeHandler}>Home</NavLink></li>
                    <li><NavLink to={'products'} className={activeHandler}>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
