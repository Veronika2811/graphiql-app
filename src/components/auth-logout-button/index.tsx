import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Hidden, IconButton, Tooltip } from '@mui/material';
import authService from 'api/apiAuthFirebase';
import { useLocale } from 'internationalization/useLocale';

import { routerLinkButtonSx } from 'components/router-link-button/styles';

export const AuthLogoutButton = () => {
  const { translation } = useLocale();

  const handlerOnClick = () => authService.logout();

  return (
    <>
      <Hidden mdDown>
        <Button
          variant="outlined"
          size="large"
          sx={routerLinkButtonSx.button}
          onClick={handlerOnClick}
        >
          {translation.logOut}
        </Button>
      </Hidden>
      <Hidden mdUp>
        <Tooltip title={translation.logOut}>
          <IconButton color="primary" onClick={handlerOnClick}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Hidden>
    </>
  );
};
