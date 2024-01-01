import { useState } from 'react';
import { Stack } from '@mui/material';

import SearchBar from 'components/search-bar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState<string>('');

  return (
    <Stack direction="column" rowGap={2}>
      <SearchBar endpoint={endpoint} setEndpoint={setEndpoint} />
    </Stack>
  );
};

export default EditorPage;
