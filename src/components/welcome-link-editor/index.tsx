import { Link as RouterLink } from 'react-router-dom';
import { Link, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { EDITOR } from 'shared/router-path';

export const WelcomeLinkEditor = () => {
  const { translation } = useLocale();

  return (
    <Typography variant="h3" component="h2" align="right">
      <Link
        component={RouterLink}
        to={EDITOR}
        color="secondary"
        underline="always"
        aria-label="link-editor"
      >
        {translation.welcome_link_editor_heading}
      </Link>
    </Typography>
  );
};
