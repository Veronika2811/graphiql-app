import { render, screen } from '@testing-library/react';
import { englishDictionary } from 'internationalization/locales/en';
import { vi } from 'vitest';

import { Footer } from '.';

const mocks = vi.hoisted(() => ({
  useLocale: vi.fn(),
}));

vi.mock('internationalization/useLocale', () => ({
  useLocale: mocks.useLocale,
}));

mocks.useLocale.mockReturnValue({
  translation: englishDictionary,
});

describe('Footer component', () => {
  it('should displays the current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(currentYear)).toBeInTheDocument();
  });

  it('should contains a link to RsSchool', () => {
    render(<Footer />);
    const rsSchoolLink = screen.getByRole('link', { name: /rs school/i });
    expect(rsSchoolLink).toBeInTheDocument();
    expect(rsSchoolLink).toHaveAttribute('href', 'https://rs.school/react/');
  });

  it('should renders the GitHubDeveloperLinks component', () => {
    render(<Footer />);
    expect(screen.getByLabelText(englishDictionary.artem)).toBeInTheDocument();
    expect(
      screen.getByLabelText(englishDictionary.veranika)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(englishDictionary.konstantin)
    ).toBeInTheDocument();
  });
});
