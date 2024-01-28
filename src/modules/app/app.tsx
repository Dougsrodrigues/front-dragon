import { Toaster } from 'sonner';

import { ReactQueryProvider } from './infra/providers/react-query-provider';
import { ReactRouterProvider } from './infra/providers/react-router-provider';

export function App() {
  return (
    <>
      <ReactQueryProvider>
        <ReactRouterProvider />
        <Toaster />
      </ReactQueryProvider>
    </>
  );
}
