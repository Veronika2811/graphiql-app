import { render, screen } from '@testing-library/react';

import { AuthFormContainer } from '.';

describe('ContainerForm', () => {
  it('renders the title and children correctly', () => {
    const testTitle = 'Test Title';
    const testChild = 'Test Child';

    render(
      <AuthFormContainer title={testTitle}>{testChild}</AuthFormContainer>
    );

    expect(screen.getByRole('heading')).toHaveTextContent(testTitle);
    expect(screen.getByText(testChild)).toBeInTheDocument();
  });
});
