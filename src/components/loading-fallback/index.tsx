import { CircularProgress, Stack, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

export const LoadingFallback = () => {
  const { translation } = useLocale();

  return (
    <Stack
      component="main"
      flex={1}
      alignItems="center"
      justifyContent="center"
      gap={3}
    >
      <CircularProgress color="secondary" size={100} />
      <Typography variant="h2">{translation.loading}...</Typography>
    </Stack>
  );
};
