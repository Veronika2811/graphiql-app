import { render, screen } from '@testing-library/react';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import DocsWrapper from '.';

const mocks = vi.hoisted(() => ({
  useLocale: vi.fn(),
  useAppSelector: vi.fn(),
}));

vi.mock('store/hooks', () => ({
  useAppSelector: mocks.useAppSelector,
}));

vi.mock('internationalization/useLocale', () => ({
  useLocale: mocks.useLocale,
}));

mocks.useLocale.mockReturnValue({
  translation: englishDictionary,
});

describe('DocsWrapper', () => {
  it('renders the title with correct text from translation', () => {
    render(<DocsWrapper />);

    const titleElement = screen.getByText(englishDictionary.docs);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders doc information based on Redux state', () => {
    mocks.useAppSelector.mockReturnValue('Line 1\nLine 2\nLine 3');

    render(<DocsWrapper />);

    const line1Element = screen.getByText('Line 1');
    const line2Element = screen.getByText('Line 2');
    const line3Element = screen.getByText('Line 3');

    expect(line1Element).toBeInTheDocument();
    expect(line2Element).toBeInTheDocument();
    expect(line3Element).toBeInTheDocument();
  });

  it('renders formatted text for special cases', () => {
    mocks.useAppSelector.mockReturnValue('{"Some JSON Data"\n');

    render(<DocsWrapper />);

    const jsonElement = screen.getByText('{Some JSON Data');

    expect(jsonElement).toBeInTheDocument();
  });

  it('renders opening curly brace if the last character is {', () => {
    mocks.useAppSelector.mockReturnValue('Some text{');

    render(<DocsWrapper />);

    expect(screen.getByText('{')).toBeInTheDocument();
    expect(screen.getByText('Some text')).toBeInTheDocument();
  });

  it('renders closing curly brace', () => {
    mocks.useAppSelector.mockReturnValue('}');

    render(<DocsWrapper />);

    expect(screen.getByText('}')).toBeInTheDocument();
  });
});
