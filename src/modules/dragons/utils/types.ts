import { type z } from 'zod';

import { type createDragonSchema, type editDragonSchema } from './schemas';

export interface DragonsResponse {
  createdAt: string;
  name: string;
  type: string;
  histories?: string;
  id: string;
}

export type CreateDragonSchemaData = z.infer<typeof createDragonSchema>;
export interface CreateDragonBodyProps {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
}

export type EditDragonSchemaData = z.infer<typeof editDragonSchema>;

export type EditDragonBodyProps = CreateDragonBodyProps;
export interface EditDragonProps {
  id: string;
  body: EditDragonBodyProps;
}
