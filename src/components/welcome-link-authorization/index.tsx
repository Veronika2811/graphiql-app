import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { AUTH } from 'shared/router-path';

export const WelcomeLinkAuthorization = () => {
  const { translation } = useLocale();

  return (
    <Typography variant="h3" component="h2" align="right">
      <Link
        component={RouterLink}
        to={AUTH}
        color="secondary"
        underline="always"
        aria-label="link-authorization"
      >
        {translation.welcome_link_authorization_heading}
      </Link>
    </Typography>
  );
};
