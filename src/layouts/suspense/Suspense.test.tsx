import { renderWithProviders } from '../../renderWithProviders';

import { SuspenseLayout } from '.';

describe('SuspenseLayout component', () => {
  it('should renders correctly SuspenseLayout component', () => {
    const container = renderWithProviders(<SuspenseLayout />);
    expect(container).toMatchSnapshot();
  });
});
