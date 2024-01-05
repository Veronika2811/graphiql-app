import { Container, Link, Typography } from '@mui/material';
import { theme } from 'theme';
import { RsSchoolIcon } from 'ui/icons';

import { GitHubDeveloperLinks } from 'components/github-developer-links';

import { footerSx } from './styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container component="footer" maxWidth="xl" sx={footerSx.footer}>
      <Typography variant="subtitle2">{currentYear}</Typography>
      <GitHubDeveloperLinks />
      <Link href="https://rs.school/react/" target="_blank" rel="noopener">
        <RsSchoolIcon width={theme.spacing(15)} height={theme.spacing(8)} />
      </Link>
    </Container>
  );
};
