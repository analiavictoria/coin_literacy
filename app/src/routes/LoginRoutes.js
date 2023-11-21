import { lazy } from 'react';

// project imports
import MinimalLayout from 'layout/MinimalLayout';
import Loadable from 'ui-component/Loadable';

// login routing
const LandingPage = Loadable(lazy(() => import('views/homepage/home')));
const AuthLogin = Loadable(lazy(() => import('views/authentication/auth/Login')));
const AuthRegister = Loadable(lazy(() => import('views/authentication/auth/Register')));
// const AuthForgotPassword = Loadable(lazy(() => import('views/pages/authentication/ForgotPassword')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/login',
            element: <AuthLogin />
        },
        {
            path: '/register',
            element: <AuthRegister />
        },
        //{
        //    path: '/forgot',
        //    element: <AuthForgotPassword />
        //}
    ]
};

export default LoginRoutes;