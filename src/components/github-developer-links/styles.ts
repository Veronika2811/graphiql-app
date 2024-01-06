import { theme } from 'theme';

export const gitHubDeveloperLinksSx = {
  list: {
    display: 'flex',
    justifyContent: 'center',
    gap: 2,
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          width: '100%',
        },
      }),
  },
  item: {
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      }),
  },
};
