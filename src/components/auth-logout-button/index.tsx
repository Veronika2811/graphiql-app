import { Button } from '@mui/material';
import authService from 'api/apiAuthFirebase';
import { useLocale } from 'internationalization/useLocale';

import { authLogoutButtonSx } from './styles';

export const AuthLogoutButton = () => {
  const { translation } = useLocale();

  const handlerOnClick = () => authService.logout();

  return (
    <Button
      variant="outlined"
      size="large"
      sx={authLogoutButtonSx.button}
      onClick={handlerOnClick}
    >
      {translation.logOut}
    </Button>
  );
};
