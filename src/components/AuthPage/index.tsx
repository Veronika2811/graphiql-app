import { Container, Paper, Typography } from '@mui/material';

import ROOT from '../../constants/constants';
import CustomTab from '../CustomTab';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

import styles from './styles';

const tabsPanel = [<SignInForm key="sing_in" />, <SignUpForm key="sing_up" />];

const AuthPage = () => {
  // console.log('thema', theme.typography.h1);
  // console.log('theme.component', theme.components.MuiTextField);
  // console.log('breackpoint', {...(theme.breakpoints &&
  //   theme.breakpoints.down && {
  //   [theme.breakpoints.down('md')]: {
  //     fontSize: '8rem',
  //   }
  // })})
  console.log('AuthPage');
  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Paper sx={styles.paper}>
        <Typography variant="h4" component="h2" align="center">
          {ROOT.AUTH_FORM.TITLE}
        </Typography>
        <CustomTab tabNames={ROOT.AUTH_FORM.TABS} tabContent={tabsPanel} />
      </Paper>
    </Container>
  );
};

export default AuthPage;
