import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { auth } from 'api/initFirebase';
import { SIGN_IN, SIGN_UP } from 'shared/router-path';
import { GraphQLIcon } from 'ui/icons';

import { Logout } from 'components/Logout';

import { headerSx } from './styles';

export const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <AppBar position="sticky" sx={headerSx.header}>
      <Container maxWidth="xl" sx={headerSx.container}>
        <GraphQLIcon width="60px" height="60px" />
        <Stack direction="row" spacing={2.5}>
          <Box component="div" display="flex" alignItems="center" gap="5px">
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
            {user ? (
              <Logout sx={headerSx.button} />
            ) : (
              <>
                <Button
                  component={Link}
                  to={SIGN_IN}
                  variant="outlined"
                  size="large"
                  sx={headerSx.button}
                >
                  Sign In
                </Button>
                <Button
                  component={Link}
                  to={SIGN_UP}
                  variant="outlined"
                  size="large"
                  sx={headerSx.button}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
