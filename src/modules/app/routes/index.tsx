import { createBrowserRouter } from 'react-router-dom';

import { SignIn } from '../../authentication/pages/sign-in';
import { Home } from '../../home/pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);
