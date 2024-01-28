import { http, HttpResponse } from 'msw';

import { LIST_DRAGONS_MOCK } from '../mocks/list-dragons-mock';

const listDragonsHandlerWithValues = http.get('/dragons', () => {
  return HttpResponse.json(LIST_DRAGONS_MOCK);
});

export const listDragonsHandlers = [listDragonsHandlerWithValues];
