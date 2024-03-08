import React, { useRef, useState } from 'react';

import classes from './AddMovie.module.css';

function isValidDate(dateString) {
  // Check if the date string matches the format "YYYY-MM-DD"
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return false;
  }

  // Attempt to parse the date string into a Date object
  const date = new Date(dateString);

  // Check if the parsed date object is valid
  // Note: JavaScript Date automatically handles invalid dates (e.g., February 30)
  return !isNaN(date.getTime());
}

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');
  const [isTitleValid, setTitleValid] = useState(true);
  const [isOpeningTextValid, setOpeningTextValid] = useState(true);
  const [isReleaseDateValid, setReleaseDateValid] = useState(true);

  function validateForm() {
    const title = titleRef.current.value.trim();
    const openingText = openingTextRef.current.value.trim();
    const releaseDate = releaseDateRef.current.value.trim();

    setTitleValid(title.length > 0);
    setOpeningTextValid(openingText.length > 50);
    setReleaseDateValid(isValidDate(releaseDate));

    return title.length > 0 && openingText.length > 50 && isValidDate(releaseDate);
  }

  function submitHandler(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

    titleRef.current.value = '';
    openingTextRef.current.value = '';
    releaseDateRef.current.value = '';
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={`${classes.control} ${isTitleValid ? '' : classes.invalid}`}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
        {!isTitleValid && <p className={classes.error}>Title is required.</p>}
      </div>
      <div className={`${classes.control} ${isOpeningTextValid ? '' : classes.invalid}`}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
        {!isOpeningTextValid && <p className={classes.error}>Opening text must be at least 50 characters.</p>}
      </div>
      <div className={`${classes.control} ${isReleaseDateValid ? '' : classes.invalid}`}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' ref={releaseDateRef} />
        {!isReleaseDateValid && <p className={classes.error}>Invalid date format (YYYY-MM-DD).</p>}
      </div>
      <button type='submit'>Add Movie</button>
    </form>
  );
}

export default AddMovie;
