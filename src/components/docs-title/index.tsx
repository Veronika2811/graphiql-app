import { Box, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

export const DocsTitle = () => {
  const { translation } = useLocale();

  return (
    <Box component="section" display="flex" flexDirection="column" gap={2}>
      <Typography variant="subtitle1">{translation.docs}</Typography>
      <Typography variant="subtitle2">
        {translation.docs_description}
      </Typography>
    </Box>
  );
};
