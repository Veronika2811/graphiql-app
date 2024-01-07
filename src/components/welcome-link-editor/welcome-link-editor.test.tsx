import { renderWithProviders } from '../../renderWithProviders';

import { WelcomeLinkEditor } from '.';

describe('WelcomeLinkEditor component', () => {
  it('should renders correctly WelcomeLinkEditor component', () => {
    const container = renderWithProviders(<WelcomeLinkEditor />);
    expect(container).toMatchSnapshot();
  });
});
