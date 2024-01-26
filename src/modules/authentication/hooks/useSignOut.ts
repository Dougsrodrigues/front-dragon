import { useNavigate } from 'react-router-dom';

import { localStorageAdapter } from '../../app/infra/lib/local-storage-adapter';
import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '../utils/constants';

export function useSignOut() {
  const navigate = useNavigate();
  function handleSignOut() {
    localStorageAdapter.remove(LOCAL_STORAGE_AUTHENTICATION_KEY);
    navigate('/');
  }
  return { handleSignOut };
}
