import { renderWithProviders } from '../../renderWithProviders';

import NotFoundPage from '.';

describe('NotFoundPage page', () => {
  it('should renders correctly NotFoundPage page', () => {
    const container = renderWithProviders(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
