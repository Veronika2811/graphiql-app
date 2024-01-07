import { renderWithProviders } from '../../renderWithProviders';

import { WelcomeLinkAuthorization } from '.';

describe('WelcomeLinkAuthorization component', () => {
  it('should renders correctly WelcomeLinkAuthorization component', () => {
    const container = renderWithProviders(<WelcomeLinkAuthorization />);
    expect(container).toMatchSnapshot();
  });
});
