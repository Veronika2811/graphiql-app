import { Stack } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { AUTH_TABS } from 'shared/constants/auth';
import { AUTH } from 'shared/router-path';

import { RouterLinkButton } from 'components/router-link-button';

export const AuthButtons = () => {
  const { translation } = useLocale();

  return (
    <Stack direction="row" spacing={2.5} alignItems="center">
      <RouterLinkButton link={AUTH} activeTab={AUTH_TABS.signIn}>
        {translation.signIn}
      </RouterLinkButton>
      <RouterLinkButton link={AUTH} activeTab={AUTH_TABS.signUp}>
        {translation.signUp}
      </RouterLinkButton>
    </Stack>
  );
};
