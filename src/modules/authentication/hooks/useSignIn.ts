import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { localStorageAdapter } from '../../app/infra/lib/local-storage-adapter';
import { authenticationServices } from '../services/authentication-services';
import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '../utils/constants';
import { type HandleSignInProps, type SignInResponse } from '../utils/types';

export function useSignIn() {
  const navigate = useNavigate();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: authenticationServices.signIn,
  });

  async function handleSignIn(data: HandleSignInProps) {
    try {
      const response = await authenticate(data);
      localStorageAdapter.set(
        LOCAL_STORAGE_AUTHENTICATION_KEY,
        JSON.stringify(response),
      );

      navigate('/');
    } catch (error) {
      toast.error('Houve um erro ao fazer login, tente novamente mais tarde!');
    }
  }

  useEffect(() => {
    const localStorageDataUser = localStorageAdapter.get<SignInResponse>(
      LOCAL_STORAGE_AUTHENTICATION_KEY,
    );

    if (localStorageDataUser?.user?.isAuthenticated ?? false) {
      navigate('/');
    }
  }, [navigate]);

  return { handleSignIn };
}
