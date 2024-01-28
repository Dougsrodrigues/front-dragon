import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render as renderTestingLibrary,
  type RenderOptions,
  screen,
} from '@testing-library/react';
import { type ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/modules/app/routes';

export const queryClient = new QueryClient();

const AllTheProviders = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => renderTestingLibrary(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/export
export * from '@testing-library/react';

// eslint-disable-next-line import/export
export { customRender as render, screen };
