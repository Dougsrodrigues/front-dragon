import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '@/modules/authentication/utils/constants';
import { localStorageMock } from '@/tests/mocks/local-storage-mock';
import { responseSignIn } from '@/tests/mocks/mock-sign-in';
import {
  cleanup,
  fireEvent,
  queryClient,
  render,
  screen,
  waitFor,
  // waitFor,
} from '@/tests/test-utils';

import { dragonsServices } from '../../services/dragons-service';
import { LIST_DRAGONS_KEY } from '../../utils/constants';
import { type DragonsResponse } from '../../utils/types';
import { ListDragons } from '.';

describe('List Dragons Page', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
    render(<ListDragons />);
  });

  beforeAll(() => {
    localStorageMock.set(
      LOCAL_STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(responseSignIn),
    );
  });

  afterAll(() => {
    localStorageMock.remove(LOCAL_STORAGE_AUTHENTICATION_KEY);
  });

  it('should be able to renders correctly', async () => {
    const sut = await screen.findByTestId('list-dragons-page');

    expect(sut).toBeTruthy();
  });

  it('should be able to renders loading when requesting', () => {
    const sut = screen.getByTestId('loading');

    expect(sut).toBeTruthy();
  });

  it('should be able to click on button and call redirect function', async () => {
    const fnButton = jest.fn();

    const sut = await screen.findByTestId('add-new-dragon');

    sut.onclick = fnButton;

    fireEvent.click(sut);

    expect(sut).toBeTruthy();
    expect(fnButton).toHaveBeenCalled();
  });

  it('should be able to click on delete button and remove dragon on cache and api', async () => {
    const dragons = await dragonsServices.getDragons();

    const [sut] = await screen.findAllByTestId('delete-dragon-button');

    await waitFor(() => {
      fireEvent.click(sut);
    });

    const cachedDragons = queryClient.getQueryData<DragonsResponse[]>([
      LIST_DRAGONS_KEY,
    ])!;

    expect(sut).toBeTruthy();
    expect(dragons.length).toBeGreaterThan(cachedDragons.length);
  });

  it('should be able to click on details button and function call', async () => {
    const fnButton = jest.fn();

    const [sut] = await screen.findAllByTestId('details-dragon-button');

    sut.onclick = fnButton;

    fireEvent.click(sut);

    expect(sut).toBeTruthy();
    expect(fnButton).toHaveBeenCalled();
  });
});
