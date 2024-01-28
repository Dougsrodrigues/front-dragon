import { LOCAL_STORAGE_AUTHENTICATION_KEY } from '@/modules/authentication/utils/constants';
import { localStorageMock } from '@/tests/mocks/local-storage-mock';
import { responseSignIn } from '@/tests/mocks/mock-sign-in';
import { render, screen } from '@/tests/test-utils';

import { ListDragons } from '.';

describe('List Dragons Page', () => {
  beforeAll(() => {
    localStorageMock.set(
      LOCAL_STORAGE_AUTHENTICATION_KEY,
      JSON.stringify(responseSignIn),
    );
  });

  afterAll(() => {
    localStorageMock.remove(LOCAL_STORAGE_AUTHENTICATION_KEY);
  });

  it('renders correctly', async () => {
    render(<ListDragons />);

    const sut = await screen.findByTestId('list-dragons-page');
    expect(sut).toBeTruthy();
  });
});
