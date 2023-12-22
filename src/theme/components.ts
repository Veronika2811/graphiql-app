import { alpha, Components } from '@mui/material';

export const componentsCustom: Components = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: alpha('#ffffff', 0.05),
        },
      },
    },
  },
};
