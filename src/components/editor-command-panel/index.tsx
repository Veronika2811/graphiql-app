import {
  CleaningServices,
  ImportContactsOutlined,
  PlayCircleOutlineTwoTone,
} from '@mui/icons-material';
import { IconButton, Tooltip, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectStateDocs, selectStateDocsDrawer } from 'store/selectors';
import { setStateDocsDrawer } from 'store/slices/documentation';

interface EditorCommandPanelProps {
  handleClick: () => void;
}

export const EditorCommandPanel = (props: EditorCommandPanelProps) => {
  const { translation } = useLocale();
  const docs = useAppSelector(selectStateDocs);
  const docsOpen = useAppSelector(selectStateDocsDrawer);
  const dispatch = useAppDispatch();

  const handleDrawerChange = () => dispatch(setStateDocsDrawer(!docsOpen));

  return (
    <>
      <Tooltip title={translation.button_execute_query}>
        <IconButton aria-label="Execute query" type="submit">
          <PlayCircleOutlineTwoTone color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title={translation.button_make_beautiful}>
        <IconButton aria-label="Prettify query" onClick={props.handleClick}>
          <CleaningServices color="secondary" fontSize="large" />
        </IconButton>
      </Tooltip>
      <Tooltip title={translation.editor_show_documentation}>
        <Typography component="span" display="flex" justifyContent="center">
          <IconButton disabled={!docs} onClick={handleDrawerChange}>
            <ImportContactsOutlined
              color={docs ? 'secondary' : 'primary'}
              fontSize="large"
            />
          </IconButton>
        </Typography>
      </Tooltip>
    </>
  );
};
