import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

export const Layout = () => (
  <>
    <Header />
    <Container
      component="main"
      maxWidth="xl"
      sx={{ display: 'flex', flex: '1 1', padding: 2 }}
    >
      <Outlet />
    </Container>
    <Footer />
  </>
);
