import {
  CleaningServices,
  PlayCircleOutlineTwoTone,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

interface EditorCommandPanelProps {
  handleClick: () => void;
}

export const EditorCommandPanel = (props: EditorCommandPanelProps) => (
  <>
    <Tooltip title="Execute query">
      <IconButton aria-label="Execute query" type="submit">
        <PlayCircleOutlineTwoTone color="secondary" fontSize="large" />
      </IconButton>
    </Tooltip>
    <Tooltip title="Prettify query">
      <IconButton aria-label="Prettify query" onClick={props.handleClick}>
        <CleaningServices color="secondary" fontSize="large" />
      </IconButton>
    </Tooltip>
  </>
);
