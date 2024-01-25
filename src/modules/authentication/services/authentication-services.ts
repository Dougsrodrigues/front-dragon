import { type SignInProps } from '../utils/types';

async function signIn(_: SignInProps) {
  await new Promise(resolve => setTimeout(resolve, 2000));
}

export const authenticationServices = {
  signIn,
};
