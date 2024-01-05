import {
  CleaningServices,
  PlayCircleOutlineTwoTone,
} from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

export const EditorCommandPanel = () => {
  const { translation } = useLocale();

  return (
    <>
      <Tooltip title={translation.button_execute_query}>
        <IconButton aria-label="Execute query" type="submit">
          <PlayCircleOutlineTwoTone color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title={translation.button_make_beautiful}>
        <IconButton aria-label="Prettify query">
          <CleaningServices color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
    </>
  );
};
