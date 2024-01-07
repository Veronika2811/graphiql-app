import { renderWithProviders } from '../../renderWithProviders';

import { AboutProjectList } from '.';

describe('AboutProjectList component', () => {
  it('should renders correctly AboutProjectList component', () => {
    const container = renderWithProviders(<AboutProjectList />);
    expect(container).toMatchSnapshot();
  });
});
