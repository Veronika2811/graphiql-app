import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from 'theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const MuiProvider = (props: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {props.children}
  </ThemeProvider>
);
