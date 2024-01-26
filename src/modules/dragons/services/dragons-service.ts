import { api } from '../../app/infra/lib/axios';
import { type DragonsResponse } from '../utils/types';

async function getDragons(): Promise<DragonsResponse[]> {
  const { data } = await api.get('/dragon');
  return data;
}

async function deleteDragon(id: string): Promise<DragonsResponse> {
  const { data } = await api.delete(`/dragon/${id}`);
  return data;
}

export const dragonsServices = {
  getDragons,
  deleteDragon,
};
