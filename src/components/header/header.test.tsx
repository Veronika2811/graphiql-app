import { waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import { Header } from '.';

describe('Header component', () => {
  it('should renders correctly Header component', async () => {
    const container = renderWithProviders(<Header />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
