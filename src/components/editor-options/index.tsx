import React, { useState } from 'react';
import { Box } from '@mui/material';
import { EditorOptionsFieldNames } from 'type/editor-form';

import EditorField from 'components/editor-field';
import OptionButtons from 'components/editor-options-buttons';

import { EditorOptionsSx } from './styles';

const EditorOptions = () => {
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

      {activeTab === 'variables' && <EditorField name={activeTab} />}
      {activeTab === 'headers' && <EditorField name={activeTab} />}
    </Box>
  );
};

export default EditorOptions;
