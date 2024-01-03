import { ROOT } from 'shared/constants/elements';
import { SIGN_IN } from 'shared/router-path';

import { FrameBox } from 'components/FrameBox';
import { SignUpForm } from 'components/SignUpForm';

const SignUp = () => (
  <FrameBox
    title={ROOT.SIGN_UP.TITLE}
    content={<SignUpForm />}
    message={ROOT.SIGN_UP.MESSAGE}
    linkAdress={SIGN_IN}
    linkText={ROOT.SIGN_UP.LINK_TEXT}
  />
);

export default SignUp;
