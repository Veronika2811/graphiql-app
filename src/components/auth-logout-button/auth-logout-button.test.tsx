import { fireEvent, waitFor } from '@testing-library/react';
import mediaQuery from 'css-mediaquery';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import { renderWithProviders } from '../../renderWithProviders';

import { AuthLogoutButton } from '.';

function createMatchMedia(width: number): (query: string) => MediaQueryList {
  return (query: string) =>
    ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
    }) as unknown as MediaQueryList;
}

const mocks = vi.hoisted(() => ({
  authService: {
    logout: vi.fn(),
  },
}));

vi.mock('api/apiAuthFirebase', () => ({
  __esModule: true,
  default: mocks.authService,
}));

describe('AuthLogoutButton component', () => {
  window.matchMedia = createMatchMedia(1440);

  it('should renders correctly AuthLogoutButton component', () => {
    const container = renderWithProviders(<AuthLogoutButton />);
    expect(container).toMatchSnapshot();
  });

  it('should logOut', async () => {
    const { getByRole } = renderWithProviders(<AuthLogoutButton />);

    const logOutButton = getByRole('button', {
      name: englishDictionary.logOut,
    });

    await waitFor(() => {
      expect(logOutButton).toBeEnabled();
    });

    fireEvent.click(logOutButton);

    await waitFor(() => {
      expect(mocks.authService.logout).toHaveBeenCalled();
    });
  });
});
