import { ROOT } from 'shared/constants/elements';
import { SIGN_UP } from 'shared/router-path';

import { FrameBox } from 'components/FrameBox';
import { SignInForm } from 'components/SignInForm';

const SignIn = () => (
  <FrameBox
    title={ROOT.SIGN_IN.TITLE}
    content={<SignInForm />}
    message={ROOT.SIGN_IN.MESSAGE}
    linkAdress={SIGN_UP}
    linkText={ROOT.SIGN_IN.LINK_TEXT}
  />
);

export default SignIn;
