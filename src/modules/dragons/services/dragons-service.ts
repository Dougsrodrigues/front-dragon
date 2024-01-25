import { api } from '../../app/infra/lib/axios';
import { type DragonsResponse } from '../utils/types';

async function getDragons(): Promise<DragonsResponse[]> {
  const { data } = await api.get('/dragon');
  return data;
}

export const dragonsServices = {
  getDragons,
};
