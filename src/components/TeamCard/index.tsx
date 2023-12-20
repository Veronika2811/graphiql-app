import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import girl from 'assets/images/svg/girl.svg';
import man from 'assets/images/svg/man.svg';
import { GithubIcon } from 'ui/icons/GitHubIcon';
import { LinkedInIcon } from 'ui/icons/LinkedInIcon';
import { TelegramIcon } from 'ui/icons/TelegramIcon';

import { teamCardSx } from './styles';

interface TeamCardProps {
  name: string;
  github: string;
  linkedIn: string;
  telegram: string;
}

export const TeamCard = ({
  name,
  github,
  linkedIn,
  telegram,
}: TeamCardProps) => (
  <Card sx={teamCardSx.card}>
    <CardContent sx={teamCardSx.card__content}>
      <Typography variant="h5">{name}</Typography>
      <Stack direction="row" useFlexGap>
        <IconButton href={github} target="_blank" rel="noopener">
          <GithubIcon fontSize="large" />
        </IconButton>
        <IconButton href={linkedIn} target="_blank" rel="noopener">
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton href={telegram} target="_blank" rel="noopener">
          <TelegramIcon fontSize="large" />
        </IconButton>
      </Stack>
    </CardContent>
    <CardMedia
      component="img"
      image={name === 'Veranika' ? girl : man}
      alt={name}
      sx={teamCardSx.card__image}
    />
  </Card>
);
