import { ThemeOptions } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typographyCustom = (theme: ThemeOptions): TypographyOptions => ({
  fontFamily: ['Inter', 'sans-serif'].join(','),
  h1: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: '12.6rem',
    ...(theme.breakpoints &&
      theme.breakpoints.down && {
        [theme.breakpoints.down('md')]: {
          fontSize: '8rem',
        },
      }),
  },
  h2: {
    fontSize: '3.2rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '2.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '2.6rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontSize: '1.8rem',
    fontWeight: 700,
    lineHeight: 1.2,
    fontStyle: 'normal',
  },
  subtitle2: {
    fontSize: '1.1rem',
    fontWeight: 500,
    lineHeight: 1.2,
    fontStyle: 'normal',
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
    fontSize: '0.8rem',
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
