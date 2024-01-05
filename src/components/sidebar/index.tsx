import { memo, useCallback, useState } from 'react';
import { Box, Divider } from '@mui/material';

import { Documentation } from 'components/documentation';
import { MainColumn } from 'components/main-column';

export const Sidebar = memo(() => {
  const [open, setOpen] = useState(false);

  const handleDrawerChange = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <Box component="div" sx={{ display: 'flex', zIndex: 0 }}>
      <MainColumn controlSideBar={handleDrawerChange} />
      <Divider
        light
        sx={{ width: '2px', backgroundColor: open ? '#ffffff' : '#2B2929' }}
      />
      {open && <Documentation />}
    </Box>
  );
});

Sidebar.displayName = 'Sidebar';
