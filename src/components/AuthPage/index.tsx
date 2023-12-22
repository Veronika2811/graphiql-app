import { Container, Paper, Typography } from '@mui/material';

import ROOT from '../../constants/constants';
import CustomTab from '../CustomTab';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';

import styles from './styles';

const tabsPanel = [<SignInForm key="sing_in" />, <SignUpForm key="sing_up" />];

const AuthPage = () => (
  <Container maxWidth="sm" sx={styles.container}>
    <Paper sx={styles.paper}>
      <Typography variant="h4" component="h2" align="center">
        {ROOT.AUTH_FORM.TITLE}
      </Typography>
      <CustomTab
        tabNames={ROOT.AUTH_FORM.TABS}
        tabContent={tabsPanel}
        activeTab={0}
      />
    </Paper>
  </Container>
);

export default AuthPage;
