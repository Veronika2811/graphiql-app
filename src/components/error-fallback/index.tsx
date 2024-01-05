import { Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

export const ErrorFallback = () => {
  const { translation } = useLocale();

  return (
    <Typography variant="h1" align="center" color="secondary">
      {translation.error_boundary_message}
    </Typography>
  );
};
