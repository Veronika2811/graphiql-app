import { render } from '@testing-library/react';

import { AuthTextField } from 'components/AuthTextField';

describe('AuthTextField', () => {
  it('renders the AuthTextField component', () => {
    const { container } = render(<AuthTextField />);
    const textFieldElement = container.querySelector('.MuiFormControl-root');
    expect(textFieldElement).toBeInTheDocument();
  });
});
