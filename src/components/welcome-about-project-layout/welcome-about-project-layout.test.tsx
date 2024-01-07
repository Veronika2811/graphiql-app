import { renderWithProviders } from '../../renderWithProviders';

import { AboutProjectLayout } from '.';

describe('AboutProjectLayout component', () => {
  it('should renders correctly AboutProjectLayout component', () => {
    const container = renderWithProviders(
      <AboutProjectLayout position="row" image="image" title="title">
        description
      </AboutProjectLayout>
    );
    expect(container).toMatchSnapshot();
  });
});
