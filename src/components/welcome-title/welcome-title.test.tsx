import { renderWithProviders } from '../../renderWithProviders';

import { WelcomeTitle } from '.';

describe('WelcomeTitle component', () => {
  it('should renders correctly WelcomeTitle component', () => {
    const container = renderWithProviders(<WelcomeTitle />);
    expect(container).toMatchSnapshot();
  });
});
