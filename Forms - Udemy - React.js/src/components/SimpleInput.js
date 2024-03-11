import { useState } from "react";

const SimpleInput = (props) => {

  const [isTouched, setIsTouched] = useState(false)
  const [enteredValue, setEnteredValue] = useState('')
  const isValid = isTouched && enteredValue.trim().length > 0
  const inputStyle = (isTouched && !isValid) ? 'form-control invalid' : 'form-control'
  const errorText = <p className="error-text">Name Can't Be Empty</p>

  const nameChangeHandler = (event) => {
    setEnteredValue(event.target.value)
  }

  const nameBlurHandler = (event) => {
    setIsTouched(true)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (isValid) alert('Submited !')

    setEnteredValue('')
    setIsTouched(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div div className={inputStyle} >
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredValue} />
        {isTouched && !isValid && errorText}
      </div >
      <div className="form-actions">
        <button type="submit" disabled={!isValid} className={!isValid && "disabled"}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
