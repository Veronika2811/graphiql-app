import { useState } from 'react';
import { Stack } from '@mui/material';

// import { useGetSchemeQuery } from 'service/api';
import SearchBar from 'components/Editor/SearchBar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState<string>('');

  // const { data, isLoading, isFetching, isError } = useGetSchemeQuery(endpoint);

  return (
    <Stack direction="column" rowGap={2} padding={3}>
      <SearchBar endpoint={endpoint} setEndpoint={setEndpoint} />
    </Stack>
  );
};

export default EditorPage;
