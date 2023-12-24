import { Link, Typography } from '@mui/material';
import { ROOT } from 'constants/index';

import ContainerForm from 'components/ContainerForm';
import SignInForm from 'components/SignInForm';

const SignIn = () => (
  <ContainerForm title={ROOT.SIGN_IN.TITLE}>
    <SignInForm />
    <Typography
      variant="body1"
      component="p"
      align="center"
      sx={{ fontSize: '1rem' }}
    >
      {`${ROOT.SIGN_IN.MESSAGE} `}
      <Link href="/">{ROOT.SIGN_IN.LINK_TEXT}</Link>
    </Typography>
  </ContainerForm>
);

export default SignIn;
