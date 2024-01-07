import { theme } from 'theme';

export const appLogoSx = {
  logo: {
    display: 'block',
    width: theme.spacing(7),
    height: theme.spacing(7),
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
      }),
  },
};
