import { IconButton } from '@mui/material';

import { socialMediaController } from './socialMediaController';

const SocialMedia = ({ type, url }: { type: string; url: string }) => (
  <IconButton href={url} target="_blank" rel="noopener">
    {socialMediaController(type)}
  </IconButton>
);

export default SocialMedia;
