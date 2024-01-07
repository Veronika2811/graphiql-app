import { renderWithProviders } from '../../renderWithProviders';

import { GitHubDeveloperLinks } from '.';

describe('GitHubDeveloperLinks component', () => {
  it('should renders correctly GitHubDeveloperLinks component', () => {
    const container = renderWithProviders(<GitHubDeveloperLinks />);
    expect(container).toMatchSnapshot();
  });
});
