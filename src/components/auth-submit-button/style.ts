import { theme } from 'theme';

export const submitButtonSx = {
  box: {
    position: 'relative',
    m: 1,
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -1,
    marginLeft: -1,
  },
  'auth-button': {
    display: 'block',
    margin: 'auto',
    borderRadius: 5,
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
};
