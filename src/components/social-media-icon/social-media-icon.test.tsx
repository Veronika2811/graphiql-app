import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../renderWithProviders';

import SocialMediaIcon from '.';

describe('SocialMediaIcon component', () => {
  const { name, type, url } = {
    name: 'name',
    type: 'github',
    url: 'https://github.com/KikinovK',
  };

  it('renders correctly SocialMediaIcon component', () => {
    const container = renderWithProviders(
      <SocialMediaIcon name={name} type={type} url={url} />
    );
    expect(container).toMatchSnapshot();
  });

  it('renders default SocialMediaIcon component', () => {
    renderWithProviders(
      <SocialMediaIcon name={name} type="unknow" url={url} />
    );

    const cardDetails = screen.getByTestId('default-social-icon');

    expect(cardDetails).toBeInTheDocument();
  });
});
