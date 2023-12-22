import ROOT from 'constants/constants';

import ContainerForm from 'components/ContainerForm';
import CustomTab from 'components/CustomTab';
import SignInForm from 'components/SignInForm';
import SignUpForm from 'components/SignUpForm';

const tabsPanel = [<SignInForm key="sing_in" />, <SignUpForm key="sing_up" />];

const Auth = () => (
  <ContainerForm title={ROOT.AUTH_FORM.TITLE}>
    <CustomTab
      tabNames={ROOT.AUTH_FORM.TABS}
      tabContent={tabsPanel}
      activeTab={0}
    />
  </ContainerForm>
);

export default Auth;
