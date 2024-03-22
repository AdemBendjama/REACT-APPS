import { useRouteLoaderData } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { useNavigateIf } from '../hooks/navigate-hook';

function AuthenticationPage() {
  const token = useRouteLoaderData('root')
  useNavigateIf('/', token)

  return <>
    {!token &&
      <AuthForm />
    }
  </>;
}

export default AuthenticationPage;