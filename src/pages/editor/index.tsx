import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useGetSchemeQuery } from 'service/api';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectStateDocsDrawer } from 'store/selectors';
import { setButtonStateWithDocs, setSchema } from 'store/slices/documentation';

import { Documentation } from 'components/documentation';
import { EditorForm } from 'components/editor-form';
import { SearchBar } from 'components/search-bar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState('');
  const [isSkip, setSkip] = useState(true);

  const docsOpen = useAppSelector(selectStateDocsDrawer);
  const dispatch = useAppDispatch();

  const { data, isSuccess } = useGetSchemeQuery(endpoint, { skip: isSkip });

  useEffect(() => {
    if (isSuccess) dispatch(setSchema(data.__schema));

    dispatch(setButtonStateWithDocs(isSuccess));
  }, [data, isSuccess, dispatch]);

  const onClickEndpoint = (query: string) => {
    setEndpoint(query);
    setSkip(false);
  };

  return (
    <Stack direction="row" columnGap={2.5} width="100%">
      {docsOpen && <Documentation />}
      <Stack direction="column" rowGap={2} width="100%">
        <SearchBar endpoint={endpoint} setEndpoint={onClickEndpoint} />
        <EditorForm endpoint={endpoint} />
      </Stack>
    </Stack>
  );
};

export default EditorPage;
