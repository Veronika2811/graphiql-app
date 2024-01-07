import { renderWithProviders } from '../../renderWithProviders';

import { LoadingFallback } from '.';

describe('LoadingFallback component', () => {
  it('should renders correctly LoadingFallback component', () => {
    const container = renderWithProviders(<LoadingFallback />);
    expect(container).toMatchSnapshot();
  });
});
