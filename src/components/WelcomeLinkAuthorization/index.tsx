import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

const WelcomeLinkAuthorization = () => (
  <Typography variant="h3" component="h2" align="center">
    <Link
      component={RouterLink}
      to="/authorization"
      color="secondary"
      underline="always"
      aria-label="link-authorization"
    >
      Sign In
    </Link>
    &nbsp;to get started
  </Typography>
);

export default WelcomeLinkAuthorization;
