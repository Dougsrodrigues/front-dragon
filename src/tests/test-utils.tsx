/* eslint-disable import/export */
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import {
  render as renderTestingLibrary,
  renderHook as renderHookTestingLibrary,
  type RenderHookOptions,
  type RenderHookResult,
  type RenderOptions,
} from '@testing-library/react';
import { type ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

export const queryCache = new QueryCache();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 0,
    },
  },
});
interface AllTheProvidersProps {
  children: React.ReactNode;
}
const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>;
      <Toaster />
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => renderTestingLibrary(ui, { wrapper: AllTheProviders, ...options });

function customRenderHook<TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>,
): RenderHookResult<TResult, TProps> {
  return renderHookTestingLibrary(callback, {
    wrapper: AllTheProviders,
    ...options,
  });
}

export * from '@testing-library/react';

export { customRender as render };

export { customRenderHook as renderHook };
