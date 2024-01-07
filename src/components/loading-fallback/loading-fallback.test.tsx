import { renderWithProviders } from '../../renderWithProviders';

import { LoadingFallback } from '.';

describe('LoadingFallback component', () => {
  it('renders correctly LoadingFallback', () => {
    const container = renderWithProviders(<LoadingFallback />);
    expect(container).toMatchSnapshot();
  });
});
