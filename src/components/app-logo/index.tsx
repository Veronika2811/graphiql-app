import { Link as RouterLink } from 'react-router-dom';
import { Link, Tooltip } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { WELCOME } from 'shared/router-path';
import { GraphQLIcon } from 'ui/icons';

import { appLogoSx } from './styles';

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
        sx={appLogoSx.logo}
      >
        <GraphQLIcon width="100%" height="100%" />
      </Link>
    </Tooltip>
  );
};
