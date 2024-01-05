import { Button, SxProps } from '@mui/material';
import authService from 'api/apiAuthFirebase';

interface LogoutProps {
  sx: SxProps;
}

export const Logout = ({ sx }: LogoutProps) => {
  const hendlerOnClick = () => {
    authService.logout();
  };

  return (
    <Button variant="outlined" size="large" sx={sx} onClick={hendlerOnClick}>
      Logout
    </Button>
  );
};
