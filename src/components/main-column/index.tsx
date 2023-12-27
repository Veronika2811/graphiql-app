import { memo } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import { BookIcon } from 'ui/icons/book';
import { PlayIcon } from 'ui/icons/play';
import { RebootIcon } from 'ui/icons/reboot';
import { SettingIcon } from 'ui/icons/setting';

import { mainColumnSx } from './style';

interface MainColumnProps {
  controlSideBar: () => void;
}

export const MainColumn = memo((props: MainColumnProps) => (
  <Box component="div" sx={{ display: 'flex' }}>
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: mainColumnSx.menu,
      }}
    >
      <Box component="div" sx={mainColumnSx.block}>
        <IconButton sx={mainColumnSx.playBtn}>
          <PlayIcon width="20px" height="20px" />
        </IconButton>
        <IconButton onClick={props.controlSideBar} sx={{ color: '#ffffff' }}>
          <BookIcon width="40px" height="40px" />
        </IconButton>
      </Box>
      <Box component="div" sx={mainColumnSx.block}>
        <IconButton sx={{ color: '#ffffff' }}>
          <RebootIcon width="40px" height="40px" />
        </IconButton>
        <IconButton sx={{ color: '#6a768d' }}>
          <SettingIcon width="40px" height="40px" />
        </IconButton>
      </Box>
    </Drawer>
  </Box>
));

MainColumn.displayName = 'MainComponent';
