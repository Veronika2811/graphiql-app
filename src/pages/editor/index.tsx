import { useState } from 'react';
import { Stack } from '@mui/material';

import { EditorForm } from 'components/editor-form';

const EditorPage = () => {
  const [endpoint] = useState<string>('');

  return (
    <Stack direction="column" rowGap={2} flex={1}>
      <EditorForm endpoint={endpoint} />
    </Stack>
  );
};

export default EditorPage;
