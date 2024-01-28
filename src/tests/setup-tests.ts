import '@testing-library/jest-dom';

import { enableFetchMocks } from 'jest-fetch-mock';

import { server } from './msw';

enableFetchMocks();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
