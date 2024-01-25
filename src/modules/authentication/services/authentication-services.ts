import { type SignInProps, type SignInResponse } from '../utils/types';

async function signIn(_: SignInProps): Promise<SignInResponse> {
  return await new Promise(resolve => {
    resolve({
      user: {
        name: 'John Doe',
        isAuthenticated: true,
      },
    });
  });
}

export const authenticationServices = {
  signIn,
};
