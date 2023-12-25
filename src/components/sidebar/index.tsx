import { useState } from 'react';
import { Drawer, IconButton } from '@mui/material';
import { BookIcon } from 'ui/icons/book';
import { PlayIcon } from 'ui/icons/play';
import { RebootIcon } from 'ui/icons/reboot';
import { SettingIcon } from 'ui/icons/setting';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 70,
          position: 'relative',
          padding: 0.6,
        },
      }}
    >
      <IconButton
        sx={{
          color: '#ffffff',
          backgroundColor: '#e535ab',
          borderRadius: '8px',
          height: 40,
          width: 40,
        }}
      >
        <PlayIcon width="20px" height="20px" />
      </IconButton>
      <IconButton onClick={handleDrawerChange} sx={{ color: '#ffffff' }}>
        <BookIcon width="40px" height="40px" />
      </IconButton>
      <IconButton sx={{ color: '#ffffff' }}>
        <RebootIcon width="40px" height="40px" />
      </IconButton>
      <IconButton sx={{ color: '#6a768d' }}>
        <SettingIcon width="40px" height="40px" />
      </IconButton>
    </Drawer>
  );
};
