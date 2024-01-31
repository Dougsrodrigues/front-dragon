import { toast } from 'sonner';

import { createWithErrorDragonHandler } from '@/tests/handlers/dragon-handlers';
import { CREATE_DRAGON_MOCK } from '@/tests/mocks/create-dragon-mock';
import { server } from '@/tests/msw';
import { renderHook, waitFor } from '@/tests/test-utils';

import { useCreateDragon } from './useCreateDragon';

describe('useCreateDragon', () => {
  it('should be possible to create a dragon with success', async () => {
    const toastSpy = jest.spyOn(toast, 'success');
    const { result } = renderHook(useCreateDragon);

    await waitFor(async () => {
      await result.current.handleCreateDragon(CREATE_DRAGON_MOCK);
      expect(result.current.isCreating).toBe(false);
      expect(toastSpy).toHaveBeenCalledWith('Dragão criado com sucesso.');
    });
  });

  it('should not be possible to create a dragon with success', async () => {
    server.use(createWithErrorDragonHandler);
    const toastSpy = jest.spyOn(toast, 'error');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const { result } = renderHook(useCreateDragon);

    await waitFor(async () => {
      await result.current.handleCreateDragon(CREATE_DRAGON_MOCK);
      expect(result.current.isCreating).toBe(false);
      expect(toastSpy).toHaveBeenCalledWith(
        'Erro ao criar dragão, tente novamente mais tarde.',
      );
    });
  });
});
