import { theme } from 'theme';

export const headerSx = {
  header: {
    bgcolor: 'background.default',
    minHeight: '5.6rem',
    maxHeight: '5.6rem',
    boxShadow: 0,
    flex: 1,
    justifyContent: 'center',
    transition: 'background-color 0.5s ease',
  },
  headerSticky: {
    bgcolor: 'background.paper',
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switch: {
    '& .MuiSwitch-track': {
      bgcolor: 'secondary.main',
    },
  },
  button: {
    borderColor: 'text.primary',
    color: 'text.primary',
    borderRadius: 20,
    maxHeight: 30,
    fontSize: '0.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
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
