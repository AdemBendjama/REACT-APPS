import React from 'react';

import classes from './Movie.module.css';
import DeleteMovie from './DeleteMovie';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <DeleteMovie id={props.id} onDelete={props.onDelete} />
    </li>
  );
};

export default Movie;
