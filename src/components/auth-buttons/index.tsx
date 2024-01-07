import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { Stack } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { AUTH_TABS } from 'shared/constants/auth';
import { AUTH } from 'shared/router-path';

import { RouterLinkButton } from 'components/router-link-button';

export const AuthButtons = () => {
  const { translation } = useLocale();

  return (
    <Stack direction="row" spacing={{ md: 2 }} alignItems="center">
      <RouterLinkButton
        link={AUTH}
        activeTab={AUTH_TABS.signIn}
        icon={<LoginIcon />}
      >
        {translation.signIn}
      </RouterLinkButton>
      <RouterLinkButton
        link={AUTH}
        activeTab={AUTH_TABS.signUp}
        icon={<AppRegistrationIcon />}
      >
        {translation.signUp}
      </RouterLinkButton>
    </Stack>
  );
};
