import LogoutIcon from '@mui/icons-material/Logout';
import authService from 'api/apiAuthFirebase';

import { HeaderButton } from 'components/HeaderButton';

export const Logout = () => {
  const hendlerOnClick = () => {
    authService.logout();
  };

  return (
    <HeaderButton
      name="Logout"
      icon={<LogoutIcon />}
      onClick={hendlerOnClick}
    />
  );
};
