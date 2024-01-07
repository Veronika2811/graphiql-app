import { renderWithProviders } from '../../renderWithProviders';

import { AppLogo } from '.';

describe('AppLogo component', () => {
  it('should renders correctly AppLogo component', () => {
    const container = renderWithProviders(<AppLogo />);
    expect(container).toMatchSnapshot();
  });
});
