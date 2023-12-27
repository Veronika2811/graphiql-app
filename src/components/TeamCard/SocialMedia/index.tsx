import { IconButton } from '@mui/material';

import { socialMediaController } from './socialMediaController';
import { SocialMediaSx } from './styles';

const SocialMedia = ({ type, url }: { type: string; url: string }) => (
  <IconButton
    href={url}
    target="_blank"
    rel="noopener"
    sx={SocialMediaSx['social-button']}
  >
    {socialMediaController(type)}
  </IconButton>
);

export default SocialMedia;
