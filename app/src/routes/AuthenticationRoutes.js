import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login routing
const AuthLogin = Loadable(lazy(() => import('views/authentication/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/authentication/auth/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin />
    },
    {
      path: '/cadastro',
      element: <AuthRegister />
    }
  ]
};

export default LoginRoutes;
