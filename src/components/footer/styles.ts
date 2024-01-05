import { theme } from 'theme';

export const linkSx = {
  color: 'primary.main',
  transition: 'color ease 0.5s',
  '&:hover': {
    transition: 'color ease 0.5s',
    color: 'custom.blue',
  },
};

export const footerSx = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 90,
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
      }),
  },
  caption: {
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          textAlign: 'center',
        },
      }),
  },
};
