import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../../authentication/pages/sign-in';
import { Home } from '../../home/pages/home';
import { ProtectedRoutes } from '../components/protected-routes';

export const router = createBrowserRouter([
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
