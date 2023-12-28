import {
  CleaningServices,
  PlayCircleOutlineTwoTone,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

export const EditorCommandPanel = () => (
  <>
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
  </>
);
