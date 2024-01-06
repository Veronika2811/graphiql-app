import { render } from '@testing-library/react';

import { AuthButton } from 'components/AuthButton';

describe('AuthButton', () => {
  it('renders the AuthTextField component', () => {
    const { container } = render(<AuthButton />);
    const textFieldElement = container.querySelector('.MuiButtonBase-root');
    expect(textFieldElement).toBeInTheDocument();
  });
});
