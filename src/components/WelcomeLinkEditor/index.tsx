import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { EDITOR } from 'shared/router-path';

const WelcomeLinkEditor = () => (
  <Typography variant="h3" component="h2" align="center">
    Query and Explore GraphQL API with&nbsp;
    <Link
      component={RouterLink}
      to={EDITOR}
      color="secondary"
      underline="always"
      aria-label="link-editor"
    >
      GraphiQL IDE
    </Link>
  </Typography>
);

export default WelcomeLinkEditor;
