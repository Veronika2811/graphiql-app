import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import defaultProfile from 'assets/images/svg/default-profile.svg';
import { onErrorCardMedia } from 'utils/onErrorCardMedia';

import { SocialMediaWrapper } from 'components/social-media-wrapper';

import { teamCardSx } from './styles';

interface TeamCardProps {
  name: string;
  photo: string;
  socialMedia: {
    type: string;
    url: string;
  }[];
}

export const TeamCard = ({ name, photo, socialMedia }: TeamCardProps) => (
  <Card sx={teamCardSx.card}>
    <CardContent sx={teamCardSx.content}>
      <Typography variant="h5">{name}</Typography>
      <SocialMediaWrapper socialMedia={socialMedia} />
    </CardContent>
    <CardMedia
      component="img"
      image={photo}
      alt={`Profile picture ${name}`}
      loading="lazy"
      sx={teamCardSx.image}
      onError={(e) => onErrorCardMedia(e, defaultProfile)}
    />
  </Card>
);
