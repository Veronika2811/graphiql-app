import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from 'internationalization/useLocale';
import { AUTH_TABS, AUTH_TABS_PANEL, PATH_TABS } from 'shared/constants/auth';
import { AUTH } from 'shared/router-path';

import { AuthFormContainer } from 'components/auth-form-container';
import { AuthTabs } from 'components/auth-tabs';

const AuthPage = () => {
  const { translation } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const activeTab = location.state
    ? location.state.activeTab
    : AUTH_TABS.signIn;

  const hendlerChangeActiveTad = (numberTab: number) => {
    navigate(`${AUTH}${PATH_TABS[numberTab]}`, {
      state: { activeTab: numberTab },
    });
  };

  return (
    <AuthFormContainer title={translation.auth_title}>
      <AuthTabs
        tabNames={[translation.signIn, translation.signUp]}
        tabContent={AUTH_TABS_PANEL}
        activeTab={activeTab}
        onCangeActiveTab={(value) => hendlerChangeActiveTad(value)}
      />
    </AuthFormContainer>
  );
};

export default AuthPage;
