import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const Layout = () => (
  <Box component="div">
    <Box component="header" />
    <Box component="main">
      <Outlet />
    </Box>
    <Box component="footer" />
  </Box>
);
