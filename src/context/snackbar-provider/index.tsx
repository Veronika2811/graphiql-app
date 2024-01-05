import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Alert, AlertColor, Snackbar } from '@mui/material';

type SnackbarContextProps = {
  openSnackbar: (message: string, variant: AlertColor) => void;
  closeSnackbar: () => void;
  snackbarOpen: boolean;
  snackbarMessage: string;
  snackbarVariant: AlertColor;
};

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarVariant, setSnackbarVariant] = useState<AlertColor>('info');

  const openSnackbar = (message: string, variant: AlertColor) => {
    setSnackbarMessage(message);
    setSnackbarVariant(variant);
    setSnackbarOpen(true);
  };

  const closeSnackbar = () => setSnackbarOpen(false);

  const value = useMemo(
    () => ({
      openSnackbar,
      closeSnackbar,
      snackbarOpen,
      snackbarMessage,
      snackbarVariant,
    }),
    [snackbarOpen, snackbarMessage, snackbarVariant]
  );

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={closeSnackbar}
          severity={snackbarVariant}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
