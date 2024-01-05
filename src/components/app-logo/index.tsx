import { Link as RouterLink } from 'react-router-dom';
import { Link, Tooltip } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { WELCOME } from 'shared/router-path';
import { theme } from 'theme';
import { GraphQLIcon } from 'ui/icons';

export const AppLogo = () => {
  const { translation } = useLocale();

  return (
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
  );
};
