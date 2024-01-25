import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { authenticationAtom } from '../atoms/authentication-atom';
import { authenticationServices } from '../services/authentication-services';
import { type HandleSignInProps } from '../utils/types';

export function useSignIn() {
  const setAuthentication = useSetAtom(authenticationAtom);
  const navigate = useNavigate();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: authenticationServices.signIn,
  });

  async function handleSignIn(data: HandleSignInProps) {
    try {
      await authenticate(data);
      setAuthentication({
        isAuthenticated: true,
      });
      navigate('/home');
    } catch (error) {
      toast.error('Houve um erro ao fazer login, tente novamente mais tarde!');
    }
  }

  return { handleSignIn };
}
