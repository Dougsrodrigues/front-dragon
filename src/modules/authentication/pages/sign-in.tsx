import './styles.scss';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '../../app/components/button';
import { Input } from '../../app/components/form';
import { useSignIn } from '../hooks/useSignIn';
import { signInSchema } from '../utils/schemas';
import { type SignInSchemaData } from '../utils/types';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignInSchemaData>({
    resolver: zodResolver(signInSchema),
  });

  const { handleSignIn } = useSignIn();

  return (
    <div className="auth-container">
      <div className="auth-content">
        <h2>Dragon App.</h2>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <Input
            label="E-mail"
            type="text"
            placeholder="Insira seu e-mail"
            error={errors?.email?.message}
            {...register('email')}
          />
          <Input
            label="Senha"
            type="text"
            placeholder="Insira sua senha."
            error={errors?.password?.message}
            {...register('password')}
          />

          <Button disabled={isSubmitting} type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
