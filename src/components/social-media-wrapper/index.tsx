import { Stack } from '@mui/material';

import SocialMediaIcon from 'components/social-media-icon';

interface SocialMediaWrapperProps {
  socialMedia: {
    type: string;
    url: string;
  }[];
}

export const SocialMediaWrapper = ({
  socialMedia,
}: SocialMediaWrapperProps) => (
  <Stack direction="row" useFlexGap>
    {socialMedia.map((social) => {
      const { type, url } = social;
      return <SocialMediaIcon key={type} name={type} type={type} url={url} />;
    })}
  </Stack>
);
