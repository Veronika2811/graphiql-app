import {
  CleaningServices,
  PlayCircleOutlineTwoTone,
} from '@mui/icons-material';
import { Grid, IconButton, Tooltip } from '@mui/material';

import EditorField from 'components/editor-field';

const EditorMain = () => (
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
      justifyContent="center"
    >
      <Tooltip title="Execute query">
        <IconButton aria-label="Execute query" type="submit">
          <PlayCircleOutlineTwoTone color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Prettify query">
        <IconButton aria-label="Prettify query">
          <CleaningServices color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
    </Grid>
    <Grid item xs={13} md={6} height={{ xs: '40%', md: '100%' }}>
      <EditorField name="response" readOnly />
    </Grid>
  </Grid>
);

export default EditorMain;
