import { renderWithProviders } from '../../renderWithProviders';

import { AuthButtons } from '.';

describe('AuthButtons component', () => {
  it('should renders correctly AuthButtons component', () => {
    const container = renderWithProviders(<AuthButtons />);
    expect(container).toMatchSnapshot();
  });
});
