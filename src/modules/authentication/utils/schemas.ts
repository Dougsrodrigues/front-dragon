import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('E-mail invalido.'),
  password: z.string().min(5, 'Senha deve ter no minimo 5 characteres.'),
});
