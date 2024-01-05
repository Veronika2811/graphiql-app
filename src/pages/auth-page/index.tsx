import { useLocation } from 'react-router-dom';
import { useLocale } from 'internationalization/useLocale';
import { AUTH_TABS, AUTH_TABS_PANEL } from 'shared/constants/auth';

import { AuthFormContainer } from 'components/auth-form-container';
import { AuthTabs } from 'components/auth-tabs';

const AuthPage = () => {
  const { translation } = useLocale();
  const location = useLocation();

  const activeTab = location.state
    ? location.state.activeTab
    : AUTH_TABS.signIn;

  return (
    <AuthFormContainer title={translation.auth_title}>
      <AuthTabs
        tabNames={[translation.signIn, translation.signUp]}
        tabContent={AUTH_TABS_PANEL}
        activeTab={activeTab}
      />
    </AuthFormContainer>
  );
};

export default AuthPage;
