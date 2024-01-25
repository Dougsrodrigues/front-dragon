import { Toaster } from 'sonner';

import { ReactQueryProvider } from './react-query-provider';
import { ReactRouterProvider } from './react-router-provider';

export function Providers() {
  return (
    <>
      <ReactQueryProvider>
        <ReactRouterProvider />
        <Toaster />
      </ReactQueryProvider>
    </>
  );
}
