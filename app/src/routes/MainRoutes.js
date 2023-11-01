import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Aprenda = Loadable(lazy(() => import('views/resources/Aprenda')));
const Conversor = Loadable(lazy(() => import('views/resources/Conversor')));
const Forum = Loadable(lazy(() => import('views/resources/Forum')));

// blog routing
const Blog = Loadable(lazy(() => import('views/blog/Blog')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'recursos',
      children: [
        {
          path: 'aprenda',
          element: <Aprenda />
        }
      ]
    },
    {
      path: 'recursos',
      children: [
        {
          path: 'conversor',
          element: <Conversor />
        }
      ]
    },
    {
      path: 'recursos',
      children: [
        {
          path: 'forum',
          element: <Forum />
        }
      ]
    },
    {
      path: 'blog',
      element: <Blog />
    }
  ]
};

export default MainRoutes;
