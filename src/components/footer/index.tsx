import {
  Container,
  Link,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { GithubIcon, RsSchoolIcon } from 'ui/icons';

import { footerSx } from './styles';

const contentGithubLinks = [
  {
    tooltip: 'Artem',
    link: 'https://github.com/Arterixs',
    styleIconSx: footerSx.firstLink,
    ariaLabel: 'Artem github link',
  },
  {
    tooltip: 'Veronika',
    link: 'https://github.com/Veronika2811',
    styleIconSx: footerSx.secondLink,
    ariaLabel: 'Veronika github link',
  },
  {
    tooltip: 'Konstantin',
    link: 'https://github.com/KikinovK',
    styleIconSx: footerSx.thirtyLink,
    ariaLabel: 'Konstantin github link',
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container component="footer" maxWidth="xl" sx={footerSx.footer}>
      <Typography variant="subtitle2">{currentYear}</Typography>
      <List sx={footerSx.list}>
        {contentGithubLinks.map((item) => (
          <ListItem key={item.tooltip} disableGutters>
            <Tooltip title={item.tooltip}>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener"
                sx={item.styleIconSx}
              >
                <GithubIcon
                  width="50px"
                  height="50px"
                  aria-label={item.ariaLabel}
                />
              </Link>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Link href="https://rs.school/" target="_blank" rel="noopener">
        <RsSchoolIcon width="120px" height="60px" />
      </Link>
    </Container>
  );
};
