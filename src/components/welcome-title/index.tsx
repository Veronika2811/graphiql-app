import { Box, Typography } from '@mui/material';
import { useLocale } from 'context/hook';

export const WelcomeTitle = () => {
  const { translation } = useLocale();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h1" align="center" color="secondary">
        {translation.main_title}
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        {translation.main_subtitle}
      </Typography>
    </Box>
  );
};
