import { renderWithProviders } from '../../renderWithProviders';

import AuthPage from '.';

describe('AuthPage page', () => {
  it('should renders correctly AuthPage page', () => {
    const container = renderWithProviders(<AuthPage />);
    expect(container).toMatchSnapshot();
  });
});
