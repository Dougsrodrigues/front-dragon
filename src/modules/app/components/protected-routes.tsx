import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '../../authentication/utils/constants';
import { type SignInResponse } from '../../authentication/utils/types';
import { localStorageAdapter } from '../infra/lib/local-storage-adapter';

export function ProtectedRoutes() {
  const localStorageDataUser = localStorageAdapter.get<SignInResponse>(
    LOCAL_STORAGE_AUTHENTICATION_KEY,
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorageDataUser?.user?.isAuthenticated ?? false)) {
      navigate('/sign-in');
    }
  }, [localStorageDataUser?.user?.isAuthenticated, navigate]);
  return <></>;
}
