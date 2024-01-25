import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useSignIn } from '../hooks/useSignIn';
import { signInSchema } from '../utils/schemas';
import { type SignInSchemaData } from '../utils/types';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(signInSchema),
  });

  const { handleSignIn } = useSignIn();

  return (
    <div className="container">
      <form className="content" onSubmit={handleSubmit(handleSignIn)}>
        <input {...register('email')} type="text" placeholder="e-mail" />
        <input {...register('password')} type="text" placeholder="password" />

        <button disabled={isSubmitting} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
