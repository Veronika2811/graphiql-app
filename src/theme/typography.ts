import { ThemeOptions } from '@mui/material';

export const typographyCustom = (theme: ThemeOptions) => ({
  fontFamily: ['Inter', 'sans-serif'].join(','),
  h1: {
    fontSize: '3.1rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.7rem',
        },
      }),
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '2.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.4rem',
        },
      }),
  },
  h4: {
    fontSize: '2.6rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '2.2rem',
        },
      }),
  },
  subtitle1: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.4rem',
        },
      }),
  },
  body1: {
    fontSize: '1.6rem',
    fontWeight: 100,
    fontStyle: 'italic',
    lineHeight: 1.2,
  },
  body2: {
    fontSize: '1.2rem',
    fontWeight: 100,
    fontStyle: 'italic',
    lineHeight: 1.2,
  },
  caption: {
    fontSize: '2.2rem',
    fontWeight: 700,
    fontStyle: 'italic',
    lineHeight: 1.28,
  },
  button: {
    fontSize: '1.2rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  code: {
    fontFamily: ['Source Code Pro', 'monospace'].join(','),
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
  },
});
