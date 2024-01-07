import { waitFor } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import WelcomePage from '.';

describe('WelcomePage page', () => {
  it('should renders correctly WelcomePage page', async () => {
    const container = renderWithProviders(<WelcomePage />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
