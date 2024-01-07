import { Box, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

export const WelcomeTitle = () => {
  const { translation } = useLocale();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Typography variant="h1" align="center">
        {translation.main_title}
      </Typography>
      <Typography variant="subtitle1" component="p" align="center">
        {translation.main_subtitle}
      </Typography>
    </Box>
  );
};
