import { useCallback, useState } from 'react';
import { Box, Divider } from '@mui/material';

import { Documentation } from 'components/documentation';
import { MainColumn } from 'components/main-column';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerChange = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Box component="div" sx={{ display: 'flex' }}>
      <MainColumn controlSideBar={handleDrawerChange} />
      <Divider
        light
        sx={{ width: '2px', backgroundColor: open ? '#ffffff' : '#2B2929' }}
      />
      <Documentation isOpen={open} />
    </Box>
  );
};
