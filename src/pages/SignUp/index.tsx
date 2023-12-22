import { Link, Typography } from '@mui/material';

import ContainerForm from 'components/ContainerForm';
import SignUpForm from 'components/SignUpForm';

import ROOT from '../../constants/constants';

const SignUp = () => (
  <ContainerForm title={ROOT.SIGN_UP.TITLE}>
    <SignUpForm />
    <Typography
      variant="body1"
      component="p"
      align="center"
      sx={{ fontSize: '1rem' }}
    >
      {`${ROOT.SIGN_UP.MESSAGE} `}
      <Link href="/">{ROOT.SIGN_UP.LINK_TEXT}</Link>
    </Typography>
  </ContainerForm>
);

export default SignUp;
