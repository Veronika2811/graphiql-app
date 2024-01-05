import { Box, Typography } from '@mui/material';

export const WelcomeTitle = () => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Typography variant="h1" align="center" color="secondary">
      The Best IDE for GraphQL Requests
    </Typography>
    <Typography variant="subtitle1" component="p" align="center">
      The app is the result of completing the final task of RS School React
      Course.
    </Typography>
  </Box>
);
