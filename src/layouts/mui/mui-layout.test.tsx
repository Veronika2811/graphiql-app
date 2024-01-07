import { renderWithProviders } from '../../renderWithProviders';

import { MuiProvider } from '.';

describe('LayoutMui component', () => {
  it('should renders correctly LayoutMui component', () => {
    const container = renderWithProviders(
      <MuiProvider>Test LayoutMui</MuiProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
