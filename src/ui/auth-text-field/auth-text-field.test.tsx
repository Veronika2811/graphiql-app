import { render } from '@testing-library/react';

import { AuthTextField } from '.';

describe('AuthTextField component', () => {
  it('shoild renders the AuthTextField component', () => {
    const { container } = render(<AuthTextField />);
    const textFieldElement = container.querySelector('.MuiFormControl-root');
    expect(textFieldElement).toBeInTheDocument();
  });
});
