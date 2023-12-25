import { useState } from 'react';
import { Stack } from '@mui/material';

// import { useGetSchemeQuery } from 'service/api';
import SearchBar from 'components/search-bar';
import { Sidebar } from 'components/sidebar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState<string>('');

  // const { data, isLoading, isFetching, isError } = useGetSchemeQuery(endpoint);
  return (
    <Stack direction="row" columnGap={2.5} height="100%">
      <Sidebar />
      <Stack direction="column" rowGap={2} width="100%">
        <SearchBar endpoint={endpoint} setEndpoint={setEndpoint} />
      </Stack>
    </Stack>
  );
};

export default EditorPage;
