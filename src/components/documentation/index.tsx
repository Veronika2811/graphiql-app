import { Box, Drawer, Typography } from '@mui/material';

import { documentationSx } from './style';

interface DocumentationProps {
  isOpen: boolean;
}

export const Documentation = (props: DocumentationProps) => (
  <Drawer
    variant="permanent"
    open={props.isOpen}
    PaperProps={{
      sx: {
        ...documentationSx.menu,
        width: props.isOpen ? 420 : 0,
        padding: props.isOpen ? 1.5 : 0,
      },
    }}
  >
    <Box component="section" sx={documentationSx.titleBlock}>
      <Typography variant="subtitle1">Docs</Typography>
      <Typography variant="subtitle2">
        A GraphQL schema provides a root type for each kind of operation.
      </Typography>
    </Box>
  </Drawer>
);
