import { Grid } from '@mui/material';

import { EditorCommandPanel } from 'components/editor-command-panel';
import { EditorField } from 'components/editor-field';

export const EditorMain = () => (
  <Grid
    container
    columns={13}
    flex="1"
    justifyContent="space-between"
    alignItems="center"
  >
    <Grid item xs={13} md={6} height={{ xs: '40%', md: '100%' }}>
      <EditorField name="request" />
    </Grid>
    <Grid
      item
      xs={13}
      md={1}
      display="flex"
      flexDirection={{ xs: 'row', md: 'column' }}
      justifyContent={{ xs: 'center', md: 'flex-start' }}
      height={{ md: '100%' }}
    >
      <EditorCommandPanel />
    </Grid>
    <Grid item xs={13} md={6} height={{ xs: '40%', md: '100%' }}>
      <EditorField name="response" readOnly />
    </Grid>
  </Grid>
);
