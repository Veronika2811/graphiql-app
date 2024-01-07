import { MemoryRouter } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';

import { App } from '.';

describe('App component', () => {
  it('should render Suspense', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      const suspendTest = getByText(/Loading/i);
      expect(suspendTest).toBeInTheDocument();
    });
  });
});
