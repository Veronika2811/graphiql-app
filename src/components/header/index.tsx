import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link as RouterLink } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Box,
  Container,
  Link,
  Stack,
  Switch,
  Typography,
} from '@mui/material';
import { auth } from 'api/initFirebase';
import { SIGN_IN, SIGN_UP, WELCOME } from 'shared/router-path';
import { combineSxProps } from 'theme/utils';
import { GraphQLIcon } from 'ui/icons';

import { HeaderButton } from 'components/HeaderButton';
import { Logout } from 'components/Logout';

import { headerSx } from './styles';

export const Header = () => {
  const [user] = useAuthState(auth);
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const checkSticky = () => {
    if (headerRef.current) {
      if (window.scrollY > headerRef.current.offsetHeight) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkSticky);
    return () => {
      window.removeEventListener('scroll', checkSticky);
    };
  }, []);

  return (
    <AppBar
      ref={headerRef}
      position="sticky"
      sx={
        sticky
          ? combineSxProps(headerSx.header, headerSx.headerSticky)
          : headerSx.header
      }
    >
      <Container maxWidth="xl" sx={headerSx.container}>
        <Link component={RouterLink} to={WELCOME} sx={headerSx.logo}>
          <GraphQLIcon width="100%" height="100%" />
        </Link>
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
          <Stack
            direction="row"
            spacing={{ xs: 0.5, md: 2.5 }}
            alignItems="center"
          >
            {user ? (
              <Logout />
            ) : (
              <>
                <HeaderButton
                  to={SIGN_IN}
                  name="Sign In"
                  icon={<LoginIcon />}
                />
                <HeaderButton
                  to={SIGN_UP}
                  name="Sign UP"
                  icon={<AppRegistrationIcon />}
                />
              </>
            )}
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
