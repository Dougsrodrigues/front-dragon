import '@testing-library/jest-dom';

import { server } from './msw';
import { queryCache, queryClient } from './test-utils';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  queryCache.clear();
  queryClient.clear();
});

afterAll(() => {
  server.close();
});
