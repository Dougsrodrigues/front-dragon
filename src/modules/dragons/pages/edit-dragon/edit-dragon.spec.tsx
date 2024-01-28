import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '@/modules/authentication/utils/constants';
import { LIST_DRAGONS_MOCK } from '@/tests/mocks/list-dragons-mock';
import { localStorageMock } from '@/tests/mocks/local-storage-mock';
import { SIGN_IN_RESPONSE_MOCK } from '@/tests/mocks/mock-sign-in';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@/tests/test-utils';

import { EditDragon } from '.';
const dragon = LIST_DRAGONS_MOCK[0];

describe('Edit Dragons Page', () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      id: dragon.id,
    }),
  }));
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
    render(<EditDragon />);
  });

  beforeAll(() => {
    localStorageMock.set(
      LOCAL_STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(SIGN_IN_RESPONSE_MOCK),
    );
  });

  afterAll(() => {
    localStorageMock.remove(LOCAL_STORAGE_AUTHENTICATION_KEY);
  });

  it('should be able to renders correctly', async () => {
    const sut = await screen.findByTestId('edit-dragon');

    expect(sut).toBeTruthy();
  });

  it('should be able to show error if name validation fails', async () => {
    const buttonRegister = await screen.findByTestId('edit-dragon-button');

    fireEvent.click(buttonRegister);

    const sut = await screen.findByTestId('edit-dragon-form-name-input-error');

    expect(sut).toBeTruthy();
  });

  it('should be able to click and back and call function', async () => {
    const backFn = jest.fn();

    const sut = await screen.findByTestId('edit-dragon-back-button');

    sut.onclick = backFn;

    await waitFor(() => {
      fireEvent.click(sut);
    });

    expect(sut).toBeTruthy();
    expect(backFn).toHaveBeenCalled();
  });

  it('should be able to show error if type validation fails', async () => {
    const buttonRegister = await screen.findByTestId('edit-dragon-button');

    fireEvent.click(buttonRegister);

    const sut = await screen.findByTestId('edit-dragon-form-type-input-error');

    expect(sut).toBeTruthy();
  });

  it('should be able to start with dragon data values', async () => {
    expect(screen.findByDisplayValue(dragon.name)).toBeTruthy();
    expect(screen.findByDisplayValue(dragon.type)).toBeTruthy();
  });
});
