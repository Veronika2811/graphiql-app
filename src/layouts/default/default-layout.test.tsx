import { renderWithProviders } from '../../renderWithProviders';

import { Layout } from '.';

describe('Layout component', () => {
  it('should renders correctly Layout component', () => {
    const container = renderWithProviders(<Layout />);
    expect(container).toMatchSnapshot();
  });
});
