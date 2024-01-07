import { render, screen } from '@testing-library/react';
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
});
