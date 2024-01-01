import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from '@mui/material';
import { useLocale } from 'context/hook';
import { REGIONS } from 'context/locale';
import { AUTH, WELCOME } from 'shared/router-path';
import { theme } from 'theme';
import { GraphQLIcon } from 'ui/icons';

import { headerSx } from './styles';

export const Header = () => {
  const { language, setLanguage, translation } = useLocale();

  const onChangeLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.checked ? REGIONS.EN : REGIONS.RU;
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <AppBar position="sticky" sx={headerSx.header}>
      <Container maxWidth="xl" sx={headerSx.container}>
        <Tooltip title={translation.welcome_page}>
          <Link
            component={RouterLink}
            to={WELCOME}
            color="secondary"
            underline="always"
            aria-label="link-welcome"
          >
            <GraphQLIcon width={theme.spacing(7)} height={theme.spacing(7)} />
          </Link>
        </Tooltip>
        <Stack direction="row" spacing={2.5}>
          <Box component="div" display="flex" alignItems="center" gap={1}>
            <Typography variant="button" color="primary.main">
              Ru
            </Typography>
            <Switch
              sx={headerSx.switch}
              inputProps={{ 'aria-label': 'controlled', role: 'switch' }}
              checked={language === REGIONS.EN}
              onChange={onChangeLanguages}
            />
            <Typography variant="button" color="primary.main">
              En
            </Typography>
          </Box>
          <Stack direction="row" spacing={2.5} alignItems="center">
            <Button
              variant="outlined"
              size="large"
              sx={headerSx.button}
              component={RouterLink}
              to={AUTH}
            >
              {translation.signIn}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={headerSx.button}
              component={RouterLink}
              to={AUTH}
            >
              {translation.signUp}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </AppBar>
  );
};
