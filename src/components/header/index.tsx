import { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AppBar, Container, Stack } from '@mui/material';
import { auth } from 'api/initFirebase';
import { combineSxProps } from 'theme/utils';

import { AppLogo } from 'components/app-logo';
import { AuthButtons } from 'components/auth-buttons';
import { AuthLogoutButton } from 'components/auth-logout-button';
import { LanguageSwitch } from 'components/language-switch';

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
        <AppLogo />
        <Stack direction="row" spacing={2.5}>
          <LanguageSwitch />
          {user ? <AuthLogoutButton /> : <AuthButtons />}
        </Stack>
      </Container>
    </AppBar>
  );
};
