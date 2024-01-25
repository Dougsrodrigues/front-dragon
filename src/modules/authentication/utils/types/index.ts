import { type z } from 'zod';

import { type signInSchema } from '../schemas';

export interface HandleSignInProps {
  email: string;
  password: string;
}

export type SignInSchemaData = z.infer<typeof signInSchema>;

export interface SignInProps {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: User;
}

export interface User {
  name: string;
  isAuthenticated: boolean;
}
