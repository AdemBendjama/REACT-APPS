import { Form, Link, useActionData, useSearchParams } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const [searchParams] = useSearchParams()
  const isLogin = searchParams.get('mode') === 'login' || !searchParams.get('mode')
  const data = useActionData()

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        {data && data.errors && <p>{data.errors.email}</p>}
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        {data && data.errors && <p>{data.errors.password}</p>}
        {data && data.errors && <p>{data.errors.credentials}</p>}
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : 'login'}`} >
            {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
