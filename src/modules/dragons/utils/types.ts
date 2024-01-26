import { type z } from 'zod';

import { type createDragonSchema } from './schemas';

export interface DragonsResponse {
  createdAt: string;
  name: string;
  type: string;
  histories: any[] | string;
  id: string;
}

export type CreateDragonSchemaData = z.infer<typeof createDragonSchema>;
export interface CreateDragonBodyProps {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
}
