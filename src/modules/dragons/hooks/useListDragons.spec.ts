import { LIST_DRAGONS_MOCK } from '@/tests/mocks/list-dragons-mock';
import { renderHook, waitFor } from '@/tests/test-utils';

import { useListDragons } from './useListDragons';

jest.mock('react-router-dom');
describe('useListDragons', () => {
  test('should start with the initial value', () => {
    const { result } = renderHook(useListDragons);

    expect(result.current.dragons.length).toBe(0);
    expect(result.current.isLoading).toBe(true);
    expect(typeof result.current.handleClickSeeDetails).toBe('function');
    expect(typeof result.current.handleRegisterNewDragon).toBe('function');
  });

  test('should return dragons if everythings ok', async () => {
    const { result } = renderHook(useListDragons);

    await waitFor(() => {
      expect(result.current.dragons.length).toBe(LIST_DRAGONS_MOCK.length);
      expect(typeof result.current.dragons).toBe(typeof LIST_DRAGONS_MOCK[0]);
      expect(result.current.isLoading).toBeFalsy();
    });
  });
});
