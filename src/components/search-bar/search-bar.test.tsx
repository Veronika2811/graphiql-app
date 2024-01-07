import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { SearchBar } from '.';

const mocks = vi.hoisted(() => ({
  useSnackbar: () => ({
    openSnackbar: vi.fn(),
  }),
  useAppDispatch: () => ({
    dispatch: vi.fn(),
  }),
}));

vi.mock('context/snackbar-provider', () => ({
  useSnackbar: mocks.useSnackbar,
}));

vi.mock('store/hooks', () => ({
  useAppDispatch: mocks.useAppDispatch,
}));

describe('SearchBar component', () => {
  const endpoint = 'https://rickandmortyapi.com/graphql';

  it('should renders correctly SignInForm component', () => {
    const container = render(
      <SearchBar endpoint={endpoint} setEndpoint={vi.fn} />
    );
    expect(container).toMatchSnapshot();
  });
});
