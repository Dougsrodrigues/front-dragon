import { api } from '@/modules/app/infra/lib/axios';

import {
  type CreateDragonBodyProps,
  type DragonsResponse,
  type EditDragonProps,
} from '../utils/types';

async function createDragon(
  body: CreateDragonBodyProps,
): Promise<DragonsResponse> {
  const { data } = await api.post('/dragon', body);
  return data;
}

async function getDragons(): Promise<DragonsResponse[]> {
  const { data } = await api.get('/dragon');
  return data;
}

async function deleteDragon(id: string): Promise<DragonsResponse> {
  const { data } = await api.delete(`/dragon/${id}`);
  return data;
}

async function getDragonById(id: string): Promise<DragonsResponse> {
  const { data } = await api.get(`/dragon/${id}`);
  return data;
}

async function editDragon({
  id,
  body,
}: EditDragonProps): Promise<DragonsResponse> {
  const { data } = await api.put(`/dragon/${id}`, body);
  return data;
}

export const dragonsServices = {
  getDragons,
  deleteDragon,
  createDragon,
  getDragonById,
  editDragon,
};
