import { Container, Link, List, ListItem, Typography } from '@mui/material';
import { theme } from 'theme';
import { RsSchoolIcon } from 'ui/icons';
import { GenerateInformationAboutDeveloper } from 'utils/generate-info-developers';

import SocialMediaIcon from 'components/social-media-icon';

import { footerSx } from './styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container component="footer" maxWidth="xl" sx={footerSx.footer}>
      <Typography variant="subtitle2">{currentYear}</Typography>
      <List sx={footerSx.list}>
        {GenerateInformationAboutDeveloper().map((item) => {
          const { type, url } = item.socialMedia.find(
            (el) => el.type === 'github'
          )!;

          return (
            <ListItem key={item.name} disableGutters>
              <SocialMediaIcon name={item.name} type={type} url={url} />
            </ListItem>
          );
        })}
      </List>
      <Link href="https://rs.school/react/" target="_blank" rel="noopener">
        <RsSchoolIcon width={theme.spacing(15)} height={theme.spacing(8)} />
      </Link>
    </Container>
  );
};
