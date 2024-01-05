import React, { useState } from 'react';
import { Box } from '@mui/material';
import { EditorOptionsFieldNames } from 'types/editor-form';

import { EditorField } from 'components/editor-field';
import { OptionButtons } from 'components/editor-options-buttons';

import { EditorOptionsSx } from './styles';

export const EditorOptions = () => {
  const [activeTab, setActiveTab] = useState<EditorOptionsFieldNames | null>(
    'variables'
  );

  const handleActiveTab = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    value: EditorOptionsFieldNames | null
  ) => setActiveTab(value);

  return (
    <Box sx={EditorOptionsSx.container}>
      <OptionButtons activeTab={activeTab} handleActiveTab={handleActiveTab} />

      {activeTab && <EditorField key={activeTab} name={activeTab} />}
    </Box>
  );
};
