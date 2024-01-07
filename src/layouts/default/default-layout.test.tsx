import { waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import { Layout } from '.';

describe('Layout component', () => {
  it('should renders correctly Layout component', async () => {
    const container = renderWithProviders(<Layout />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
