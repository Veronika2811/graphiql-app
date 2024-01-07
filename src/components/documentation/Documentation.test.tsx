import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import { Documentation } from '.';

const mocks = vi.hoisted(() => ({
  useLocale: vi.fn(),
  useAppSelector: vi.fn(),
  useAppDispatch: vi.fn(),
}));

vi.mock('store/hooks', () => ({
  useAppSelector: mocks.useAppSelector,
  useAppDispatch: mocks.useAppDispatch,
}));

vi.mock('internationalization/useLocale', () => ({
  useLocale: mocks.useLocale,
}));

mocks.useLocale.mockReturnValue({
  translation: englishDictionary,
});

describe('DocsWrapper', () => {
  it('renders Drawer component', () => {
    mocks.useAppSelector.mockReturnValue(true);

    render(<Documentation />);

    const drawerElement = screen.getByRole('presentation');

    expect(drawerElement).toBeInTheDocument();
  });

  it('opens and closes Drawer', async () => {
    mocks.useAppSelector.mockReturnValue(true);

    render(<Documentation />);

    const drawerElement = screen.getByRole('presentation');
    const backdropElement = drawerElement.querySelector(
      '.MuiBackdrop-root.MuiModal-backdrop'
    );

    if (backdropElement) {
      fireEvent.click(backdropElement);

      await waitFor(() => {
        expect(drawerElement).not.toBeInTheDocument();
      });
    }
  });
});
