import { useAuthState } from 'react-firebase-hooks/auth';
import { AppBar, Container, Stack } from '@mui/material';
import { auth } from 'api/initFirebase';

import { AppLogo } from 'components/app-logo';
import { AuthButtons } from 'components/auth-buttons';
import { AuthLogoutButton } from 'components/auth-logout-button';
import { LanguageSwitch } from 'components/language-switch';

import { headerSx } from './styles';

export const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <AppBar position="sticky" sx={headerSx.header}>
      <Container maxWidth="xl" sx={headerSx.container}>
        <AppLogo />
        <Stack direction="row" spacing={2.5}>
          <LanguageSwitch />
          {user ? <AuthLogoutButton /> : <AuthButtons />}
        </Stack>
      </Container>
    </AppBar>
  );
};
