import { renderWithProviders } from '../../renderWithProviders';

import { EditorOptions } from '.';

describe('EditorOptions component', () => {
  it('should renders correctly EditorOptions component', () => {
    const container = renderWithProviders(<EditorOptions />);
    expect(container).toMatchSnapshot();
  });
});
