import useInputReducer from "../hooks/use-basic-input";
import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: firstName,
    isTouched: firstNameTouched,
    isValid: isValidFirstName,
    reset: firstNameReset,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler
  } = useInputReducer((value) => value.trim().length > 0)
  const {
    enteredValue: lastName,
    isTouched: lastNameTouched,
    isValid: isValidLastName,
    reset: lastNameReset,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInputReducer((value) => value.trim().length > 0)
  const {
    enteredValue: email,
    isTouched: emailTouched,
    isValid: isValidEmail,
    reset: emailReset,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInputReducer((value) => value.trim().includes('@'))

  const isValidForm = isValidFirstName && isValidLastName && isValidEmail;

  const submitHandler = (event) => {
    event.preventDefault();
    if (isValidForm) {
      alert('Submitted!');
      firstNameReset();
      lastNameReset();
      emailReset();
    }
  };

  const firstNameInputStyle = firstNameTouched && !isValidFirstName ? 'form-control invalid' : 'form-control';
  const lastNameInputStyle = lastNameTouched && !isValidLastName ? 'form-control invalid' : 'form-control';
  const emailInputStyle = emailTouched && !isValidEmail ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputStyle}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} value={firstName} />
          {firstNameTouched && !isValidFirstName && <p className="error-text">First Name Can't Be Empty</p>}
        </div>
        <div className={lastNameInputStyle}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} value={lastName} />
          {lastNameTouched && !isValidLastName && <p className="error-text">Last Name Can't Be Empty</p>}
        </div>
      </div>
      <div className={emailInputStyle}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={email} />
        {emailTouched && !isValidEmail && <p className="error-text">Enter a Valid Email</p>}
      </div>
      <div className='form-actions'>
        <button type="submit" disabled={!isValidForm} className={!isValidForm && 'disabled'}>Submit</button>
      </div>
    </form>
  );

};

export default BasicForm;
