import { renderWithProviders } from '../../renderWithProviders';

import { GitHubDeveloperLinks } from '.';

describe('GitHubDeveloperLinks component', () => {
  it('renders correctly GitHubDeveloperLinks component', () => {
    const container = renderWithProviders(<GitHubDeveloperLinks />);
    expect(container).toMatchSnapshot();
  });
});
