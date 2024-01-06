import { render, screen } from '@testing-library/react';

import { ContainerForm } from 'components/ContainerForm';

describe('ContainerForm', () => {
  it('renders the title and children correctly', () => {
    const testTitle = 'Test Title';
    const testChild = 'Test Child';

    render(<ContainerForm title={testTitle}>{testChild}</ContainerForm>);

    expect(screen.getByRole('heading')).toHaveTextContent(testTitle);
    expect(screen.getByText(testChild)).toBeInTheDocument();
  });
});
