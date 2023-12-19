import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

import girl from '../../assets/images/svg/girl.svg';
import man from '../../assets/images/svg/man.svg';
import { GithubIcon } from '../../ui/icons/GitHubIcon';
import { LinkedInIcon } from '../../ui/icons/LinkedInIcon';
import { TelegramIcon } from '../../ui/icons/TelegramIcon';

import { styles } from './styles';

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
  <Card sx={styles.card}>
    <CardContent sx={styles['card-content']}>
      <Typography variant="h5">{name}</Typography>
      <Box sx={styles['card-social']}>
        <IconButton href={github} target="_blank">
          <GithubIcon size="large" />
        </IconButton>
        <IconButton href={linkedIn} target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton href={telegram} target="_blank">
          <TelegramIcon />
        </IconButton>
      </Box>
    </CardContent>
    <CardMedia
      component="img"
      image={name === 'Veranika' ? girl : man}
      alt={name}
      sx={styles['card-image']}
    />
  </Card>
);
