import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { theme } from 'theme';
import { GraphQLIcon } from 'ui/icons';

import { headerSx } from './styles';

export const Header = () => (
  <AppBar position="sticky" sx={headerSx.header}>
    <Container maxWidth="xl" sx={headerSx.container}>
      <GraphQLIcon width={theme.spacing(7)} height={theme.spacing(7)} />
      <Stack direction="row" spacing={2.5}>
        <Box component="div" display="flex" alignItems="center" gap={1}>
          <Typography variant="button" color="primary.main">
            Ru
          </Typography>
          <Switch
            sx={headerSx.switch}
            inputProps={{ 'aria-label': 'controlled', role: 'switch' }}
          />
          <Typography variant="button" color="primary.main">
            En
          </Typography>
        </Box>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <Button variant="outlined" size="large" sx={headerSx.button}>
            Sign In
          </Button>
          <Button variant="outlined" size="large" sx={headerSx.button}>
            Sign Up
          </Button>
        </Stack>
      </Stack>
    </Container>
  </AppBar>
);
