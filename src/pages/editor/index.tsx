import { useState } from 'react';
import { Stack } from '@mui/material';

import { EditorForm } from 'components/editor-form';
import { SearchBar } from 'components/search-bar';

const EditorPage = () => {
  const [endpoint, setEndpoint] = useState<string>('');

  return (
    <Stack direction="column" rowGap={2} flex={1}>
      <SearchBar endpoint={endpoint} setEndpoint={setEndpoint} />
      <EditorForm endpoint={endpoint} />
    </Stack>
  );
};

export default EditorPage;
