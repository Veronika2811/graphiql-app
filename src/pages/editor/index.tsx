import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { skipToken } from '@reduxjs/toolkit/query/react';
import { useSnackbar } from 'context/snackbar-provider';
import { useLocale } from 'internationalization/useLocale';
import { useGetSchemeQuery } from 'service/api';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectStateDocsDrawer } from 'store/selectors';
import {
  setButtonStateWithDocs,
  setSchema,
  setStateDocsDrawer,
} from 'store/slices/documentation';

import { Documentation } from 'components/documentation';
import { EditorForm } from 'components/editor-form';
import { SearchBar } from 'components/search-bar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState<string | undefined>(undefined);
  const docsOpen = useAppSelector(selectStateDocsDrawer);
  const dispatch = useAppDispatch();

  const { data, isSuccess, isError } = useGetSchemeQuery(endpoint ?? skipToken);

  const { openSnackbar } = useSnackbar();
  const { translation } = useLocale();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setSchema(data));
      openSnackbar(translation.editor_message_successful_request, 'success');
    }
    if (isError)
      openSnackbar(translation.editor_message_incorrect_URL, 'error');

    dispatch(setStateDocsDrawer(false));
    dispatch(setButtonStateWithDocs(isSuccess));
  }, [
    data,
    isSuccess,
    isError,
    dispatch,
    openSnackbar,
    translation.editor_message_incorrect_URL,
    translation.editor_message_successful_request,
  ]);

  return (
    <Stack direction="row" columnGap={2.5} width="100%">
      {docsOpen && <Documentation />}
      <Stack direction="column" rowGap={2} width="100%">
        <SearchBar endpoint={endpoint} setEndpoint={setEndpoint} />
        <EditorForm endpoint={endpoint} isError={isError} />
      </Stack>
    </Stack>
  );
};

export default EditorPage;
