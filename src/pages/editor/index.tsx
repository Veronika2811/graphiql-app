import { useEffect, useState } from 'react';
import { Stack } from '@mui/material';
import { useGetSchemeQuery } from 'service/api';
import { useAppDispatch } from 'store/hooks';
import { setDocs } from 'store/slices/documentation';

import SearchBar from 'components/search-bar';
import { Sidebar } from 'components/sidebar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState('');
  const [isSkip, setSkip] = useState(true);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetSchemeQuery(endpoint, { skip: isSkip });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDocs(data.__schema));
    }
  }, [data, dispatch, isSuccess]);

  const onClickEndpoint = (query: string) => {
    setEndpoint(query);
    setSkip(false);
  };

  return (
    <Stack direction="row" columnGap={2.5} height="100%">
      <Sidebar />
      <Stack direction="column" rowGap={2} width="100%">
        <SearchBar endpoint={endpoint} setEndpoint={onClickEndpoint} />
      </Stack>
    </Stack>
  );
};

export default EditorPage;
