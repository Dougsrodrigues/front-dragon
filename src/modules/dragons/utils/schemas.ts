import { z } from 'zod';

export const createDragonSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório.'),
  type: z.string().min(1, 'Campo obrigatório.'),
  histories: z.string().min(1, 'Campo obrigatório.'),
});
