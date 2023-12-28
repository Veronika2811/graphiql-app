import { ReactNode } from 'react';
import { IconButton, SvgIconOwnProps } from '@mui/material';
import {
  DefaulSocialIcon,
  GithubIcon,
  LinkedInIcon,
  TelegramIcon,
} from 'ui/icons/socialIcons';

import { SocialMediaSx } from './styles';

interface SocialMediaIconProps {
  type: string;
  url: string;
}

const SocialMediaIcon = ({ type, url }: SocialMediaIconProps) => {
  const iconProps: SvgIconOwnProps = {
    fontSize: 'large',
  };

  const iconMap = new Map<string, ReactNode>([
    ['github', <GithubIcon key={type} {...iconProps} />],
    ['linkedIn', <LinkedInIcon key={type} {...iconProps} />],
    ['telegram', <TelegramIcon key={type} {...iconProps} />],
  ]);

  return (
    <IconButton
      href={url}
      target="_blank"
      rel="noopener"
      sx={SocialMediaSx['social-button']}
    >
      {iconMap.get(type) ?? <DefaulSocialIcon {...iconProps} />}
    </IconButton>
  );
};

export default SocialMediaIcon;
