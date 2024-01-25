import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { authenticationAtom } from '../../authentication/atoms/authentication-atom';

export function ProtectedRoutes() {
  const { isAuthenticated } = useAtomValue(authenticationAtom);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/sign-in');
    }
  }, [isAuthenticated, navigate]);
  return <></>;
}
