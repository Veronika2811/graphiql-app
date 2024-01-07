import { renderWithProviders } from '../../renderWithProviders';

import { WelcomeTitle } from '.';

describe('WelcomeTitle component', () => {
  it('renders correctly WelcomeTitle', () => {
    const container = renderWithProviders(<WelcomeTitle />);
    expect(container).toMatchSnapshot();
  });
});
