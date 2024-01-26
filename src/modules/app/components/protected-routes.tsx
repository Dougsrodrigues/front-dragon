import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '../../authentication/utils/constants';
import { type SignInResponse } from '../../authentication/utils/types';
import { localStorageAdapter } from '../infra/lib/local-storage-adapter';

// O ideal seria criar uma logica usando interceptor do axios para escutar se o code da requisição
// é  401 e dai fazer o redirect

export function ProtectedRoutes() {
  const navigate = useNavigate();
  const localStorageDataUser = localStorageAdapter.get<SignInResponse>(
    LOCAL_STORAGE_AUTHENTICATION_KEY,
  );

  useEffect(() => {
    if (!(localStorageDataUser?.user?.isAuthenticated ?? false)) {
      navigate('/sign-in');
    }
  }, [localStorageDataUser?.user?.isAuthenticated, navigate]);
  return <Outlet />;
}
