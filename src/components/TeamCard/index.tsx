import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import defaultProfile from 'assets/images/svg/default-profile.svg';

import SocialMedia from './SocialMedia';
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
      <Stack direction="row" useFlexGap>
        {socialMedia.map((social) => {
          const { type, url } = social;
          return <SocialMedia key={type} type={type} url={url} />;
        })}
      </Stack>
    </CardContent>
    <CardMedia
      component="img"
      image={photo}
      alt={`Profile picture ${name}`}
      loading="lazy"
      sx={teamCardSx.image}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = defaultProfile;
      }}
    />
  </Card>
);
