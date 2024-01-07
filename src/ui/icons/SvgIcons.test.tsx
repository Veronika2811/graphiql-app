import { SvgIconOwnProps } from '@mui/material';
import { render } from '@testing-library/react';

import {
  DefaulSocialIcon,
  GithubIcon,
  LinkedInIcon,
  TelegramIcon,
} from './socialIcons/index';
import { GraphQLIcon, RsSchoolIcon } from './index';

describe('Renders correctly SvgIcons', () => {
  const iconProps: SvgIconOwnProps = {
    fontSize: 'large',
  };

  it('renders correctly RsSchoolIcon', () => {
    const container = render(<RsSchoolIcon width="5" height="5" />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly GraphQLIcon', () => {
    const container = render(<GraphQLIcon width="5" height="5" />);
    expect(container).toMatchSnapshot();
  });
  it('renders correctly DefaulSocialIcon', () => {
    const container = render(<DefaulSocialIcon {...iconProps} />);
    expect(container).toMatchSnapshot();
  });
  it('renders correctly GithubIcon', () => {
    const container = render(<GithubIcon {...iconProps} />);
    expect(container).toMatchSnapshot();
  });
  it('renders correctly LinkedInIcon', () => {
    const container = render(<LinkedInIcon {...iconProps} />);
    expect(container).toMatchSnapshot();
  });
  it('renders correctly TelegramIcon', () => {
    const container = render(<TelegramIcon {...iconProps} />);
    expect(container).toMatchSnapshot();
  });
});
