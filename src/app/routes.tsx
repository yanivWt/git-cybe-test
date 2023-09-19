import { Route } from 'app/app.interface';
import AuthLayout from 'layouts/authLayout/AuthLayout';
import DashboardLayout from 'layouts/dashboardLayout/DashboardLayout';
import RequireAuth from "layouts/requireAuth/RequireAuth";
import Error404 from 'pages/error404/Error404';
import Intro from 'pages/intro/Intro';
import Login from 'pages/login/Login';
import { Navigate } from 'react-router-dom';

export const routes: Route[] = [
  {
    path: '/login',
    element: <AuthLayout />,

    children: [
      {
        path: '',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <RequireAuth><DashboardLayout /></RequireAuth>,
    children: [
      {
        path: '',
        element: <Navigate to="/intro" />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
    ],
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
