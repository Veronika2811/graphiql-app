import { useEffect, useRef, useState } from 'react';
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
import { combineSxProps } from 'theme/utils';
import { GraphQLIcon } from 'ui/icons';

import { headerSx } from './styles';

export const Header = () => {
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const checkSticky = () => {
    if (headerRef.current) {
      if (window.pageYOffset > headerRef.current.offsetHeight) {
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
};
