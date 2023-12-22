import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';

const WelcomeLinkEditor = () => (
  <Typography variant="h3" component="h2" align="center">
    Query and Explore GraphQL API with&nbsp;
    <Link
      component={RouterLink}
      to="/editor"
      color="secondary"
      underline="always"
      aria-label="link-editor"
    >
      GraphiQL IDE
    </Link>
  </Typography>
);

export default WelcomeLinkEditor;
