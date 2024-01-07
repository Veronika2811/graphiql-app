import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import { AuthFormContainer } from '.';

describe('AuthFormContainer component', () => {
  const testTitle = 'Test Title';
  const testChild = 'Test Child';

  it('should renders correctly AuthFormContainer component', () => {
    const container = renderWithProviders(
      <AuthFormContainer title={testTitle}>{testChild}</AuthFormContainer>
    );
    expect(container).toMatchSnapshot();
  });

  it('should renders the title and children correctly', () => {
    renderWithProviders(
      <AuthFormContainer title={testTitle}>{testChild}</AuthFormContainer>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(testTitle);
    expect(screen.getByText(testChild)).toBeInTheDocument();
  });
});
