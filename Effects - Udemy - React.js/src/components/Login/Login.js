import React, { useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../auth/auth-context';
import Input from '../UI/Input/Input';

const credentialsReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return (
      {
        ...state,
        [action.field]: {
          value: action.value,
          isValid: (action.field === 'email' ? action.value.includes('@') : action.value.trim().length > 6),
        }
      }
    )
  }

  return state
}

const Login = (props) => {
  // const [formIsValid, setFormIsValid] = useState(false);
  const [credentialsState, dispatchCredentialsState] = useReducer(credentialsReducer, {
    'email': {
      value: '',
      isValid: null
    },
    'password': {
      value: '',
      isValid: null
    }
  })
  const { isValid: emailIsValid } = credentialsState.email
  const { isValid: passwordIsValid } = credentialsState.password

  const context = useContext(AuthContext)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const emailChangeHandler = (event) => {
    dispatchCredentialsState({ type: 'USER_INPUT', field: 'email', value: event.target.value })
  };

  const passwordChangeHandler = (event) => {
    dispatchCredentialsState({ type: 'USER_INPUT', field: 'password', value: event.target.value })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (emailIsValid && passwordIsValid) {
      context.onLogin(credentialsState.email.value, credentialsState.password.value);
    }
    else if (!emailIsValid) {
      emailRef.current.focus()
    } else {
      passwordRef.current.focus()
    }
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          id="email"
          label='E-Mail'
          value={credentialsState.email.value}
          onChange={emailChangeHandler}
          isValid={credentialsState.email.isValid}>
        </Input>

        <Input
          ref={passwordRef}
          type="password"
          id="password"
          label='Password'
          value={credentialsState.password.value}
          onChange={passwordChangeHandler}
          isValid={credentialsState.password.isValid}>
        </Input>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>

      </form>
    </Card>
  );
};

export default Login;
