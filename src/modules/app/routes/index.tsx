import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../../authentication/pages/sign-in';
import { CreateDragon } from '../../dragons/pages/create-dragon';
import { EditDragon } from '../../dragons/pages/edit-dragon';
import { ListDragons } from '../../dragons/pages/list-dragons';
import { AuthenticatedLayout } from '../components/authenticated-layout';
import { ProtectedRoutes } from '../components/protected-routes';

export const routesConfig = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <AuthenticatedLayout />,
        children: [
          {
            index: true,
            path: '/',
            element: <ListDragons />,
          },
          {
            index: true,
            path: '/dragon',
            element: <CreateDragon />,
          },
          {
            path: '/dragon/:id',
            element: <EditDragon />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routesConfig);
