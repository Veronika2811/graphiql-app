import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { useLocale } from 'context/hook';
import { AUTH } from 'shared/router-path';

const WelcomeLinkAuthorization = () => {
  const { translation } = useLocale();

  return (
    <Typography variant="h3" component="h2" align="center">
      <Link
        component={RouterLink}
        to={AUTH}
        color="secondary"
        underline="always"
        aria-label="link-authorization"
      >
        {translation.signIn}
      </Link>
      &nbsp;{translation.welcome_link_authorization_heading}
    </Typography>
  );
};

export default WelcomeLinkAuthorization;
