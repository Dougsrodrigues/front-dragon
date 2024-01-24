import { RouterProvider } from 'react-router-dom';

import { router } from '../routes';

export function ReactRouterProvider() {
  return <RouterProvider router={router} />;
}
