import { renderWithProviders } from '../../renderWithProviders';

import WelcomePage from '.';

describe('WelcomePage page', () => {
  it('should renders correctly WelcomePage page', () => {
    const container = renderWithProviders(<WelcomePage />);
    expect(container).toMatchSnapshot();
  });
});
