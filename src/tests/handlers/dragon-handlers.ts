import { http } from 'msw';

import { BASE_URL } from '@/modules/app/infra/lib/axios';

import { LIST_DRAGONS_MOCK } from '../mocks/list-dragons-mock';

const listDragonsHandlerWithValues = http.get(
  `${BASE_URL}/dragon`,
  async () => {
    return Response.json(LIST_DRAGONS_MOCK);
  },
);

const deleteDragonHandler = http.delete(
  `${BASE_URL}/dragon/:id`,
  async ({ params }) => {
    const { id } = params;
    const findDragon = LIST_DRAGONS_MOCK.find(dragon => dragon.id === id);

    return Response.json(findDragon);
  },
);

const createDragonHandler = http.post(`${BASE_URL}/dragon`, async () => {
  return new Response(null);
});

export const dragonHandlers = [
  listDragonsHandlerWithValues,
  deleteDragonHandler,
  createDragonHandler,
];
