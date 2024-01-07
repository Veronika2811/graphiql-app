import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { App } from '.';

describe('App component', () => {
  it('should render Suspense', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const suspendTest = getByText(/Loading/i);
    expect(suspendTest).toBeInTheDocument();
  });
});
