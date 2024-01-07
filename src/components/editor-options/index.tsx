import React, { useState } from 'react';
import { Box } from '@mui/material';
import { EditorOptionsFieldNames } from 'types/editor-form';

import { EditorField } from 'components/editor-field';
import { OptionButtons } from 'components/editor-options-buttons';

import { editorOptionsSx } from './styles';

export const EditorOptions = () => {
  const [activeTab, setActiveTab] = useState<EditorOptionsFieldNames | null>(
    null
  );

  const handleActiveTab = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    value: EditorOptionsFieldNames | null
  ) => setActiveTab(value);

  return (
    <Box sx={editorOptionsSx.container}>
      <OptionButtons activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {activeTab && <EditorField key={activeTab} name={activeTab} />}
    </Box>
  );
};
