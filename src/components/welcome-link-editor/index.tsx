import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { useLocale } from 'context/hook';
import { EDITOR } from 'shared/router-path';

const WelcomeLinkEditor = () => {
  const { translation } = useLocale();

  return (
    <Typography variant="h3" component="h2" align="center">
      {translation.welcome_link_editor_heading}&nbsp;
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
};

export default WelcomeLinkEditor;
