import { renderWithProviders } from '../../renderWithProviders';

import { DeveloperCard } from '.';

describe('DeveloperCard component', () => {
  const { name, photo, socialMedia } = {
    name: 'Konstantin',
    photo: 'photo',
    socialMedia: [
      {
        type: 'github',
        url: 'https://github.com/KikinovK',
      },
      {
        type: 'linkedIn',
        url: 'https://www.linkedin.com/in/kostiantyn-kikinov-505387b3/',
      },
      {
        type: 'telegram',
        url: 'https://t.me/KonstantinKikinov',
      },
    ],
  };

  it('should renders correctly DeveloperCard component', () => {
    const container = renderWithProviders(
      <DeveloperCard name={name} photo={photo} socialMedia={socialMedia} />
    );
    expect(container).toMatchSnapshot();
  });
});
