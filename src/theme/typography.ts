import { ThemeOptions } from '@mui/material';

export const typographyCustom = (theme: ThemeOptions) => ({
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: '3.1rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.9rem',
        },
      }),
  },
  h2: {
    fontSize: '3rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.9rem',
        },
      }),
  },
  h3: {
    fontSize: '2.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.6rem',
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
          fontSize: '1.4rem',
        },
      }),
  },
  h5: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
  },
  subtitle1: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.1rem',
        },
      }),
  },
  subtitle2: {
    fontSize: '1.1rem',
    fontWeight: 500,
    lineHeight: 1.2,
    fontStyle: 'normal',
  },
  subtitle3: {
    fontSize: '1rem',
    fontWeight: 400,
    fontStyle: 'italic',
    lineHeight: 1.28,
  },
  body1: {
    fontSize: '1.6rem',
    fontWeight: 100,
    fontStyle: 'italic',
    lineHeight: 1.2,
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1rem',
        },
      }),
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
    fontSize: '0.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  code: {
    fontFamily: 'Source Code Pro, monospace',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
  },
});
