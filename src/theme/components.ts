import { Components } from '@mui/material';

export const componentsCustom: Components = {
  MuiSvgIcon: {
    variants: [
      {
        props: { fontSize: 'huge' },
        style: {
          fontSize: '60px',
        },
      },
      {
        props: { fontSize: 'miniHuge' },
        style: {
          fontSize: '50px',
        },
      },
    ],
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
      },
    },
  },
};
