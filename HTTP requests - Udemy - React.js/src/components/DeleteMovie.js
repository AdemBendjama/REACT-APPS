import React from 'react'
import classes from './DeleteMovie.module.css'

function DeleteMovie(props) {

  const handleSubmit = (event) => {
    event.preventDefault()

    props.onDelete(props.id)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button className={classes.button} type="submit">Delete</button>
    </form>
  )
}

export default DeleteMovie
