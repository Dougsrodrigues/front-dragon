import { faker } from '@faker-js/faker';

import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '@/modules/authentication/utils/constants';
import { localStorageMock } from '@/tests/mocks/local-storage-mock';
import { responseSignIn } from '@/tests/mocks/mock-sign-in';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@/tests/test-utils';

import { CreateDragon } from '.';

describe('Create Dragons Page', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.resetModules();
    render(<CreateDragon />);
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
    const sut = await screen.findByTestId('create-dragon-form');

    expect(sut).toBeTruthy();
  });

  it('should be able to show error if name validation fails', async () => {
    const buttonRegister = await screen.findByTestId(
      'create-dragon-register-button',
    );

    fireEvent.click(buttonRegister);

    const sut = await screen.findByTestId(
      'create-dragon-form-name-input-error',
    );

    expect(sut).toBeTruthy();
  });

  it('should be able to show error if type validation fails', async () => {
    const buttonRegister = await screen.findByTestId(
      'create-dragon-register-button',
    );

    fireEvent.click(buttonRegister);

    const sut = await screen.findByTestId(
      'create-dragon-form-type-input-error',
    );

    expect(sut).toBeTruthy();
  });

  it('should be able to register if evething is ok', async () => {
    const name = faker.person.fullName();
    const type = faker.science.chemicalElement();
    const histories = faker.lorem.lines(2);
    const registerFn = jest.fn();

    const inpuName = await screen.findByTestId('create-dragon-form-name-input');
    const inpuType = await screen.findByTestId('create-dragon-form-type-input');
    const inputHistories = await screen.findByTestId(
      'create-dragon-form-histories-input',
    );

    fireEvent.input(inpuName, { target: { value: name } });
    fireEvent.input(inpuType, { target: { value: type } });
    fireEvent.input(inputHistories, { target: { value: histories } });

    const sut = await screen.findByTestId('create-dragon-register-button');

    sut.onclick = registerFn;
    await waitFor(() => {
      fireEvent.click(sut);
    });

    expect(sut).toBeTruthy();
    expect(registerFn).toHaveBeenCalled();
  });

  it('should be able to click and back and call function', async () => {
    const backFn = jest.fn();

    const sut = await screen.findByTestId('create-dragon-back-button');

    sut.onclick = backFn;

    await waitFor(() => {
      fireEvent.click(sut);
    });

    expect(sut).toBeTruthy();
    expect(backFn).toHaveBeenCalled();
  });
});
