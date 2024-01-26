import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../../authentication/pages/sign-in';
import { ListDragons } from '../../dragons/pages/list-dragons';
import { AuthenticatedLayout } from '../components/authenticated-layout';
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
        element: <AuthenticatedLayout />,
        children: [
          {
            path: '/',
            element: <ListDragons />,
          },
        ],
      },
    ],
  },
]);
