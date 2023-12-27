import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { EditorOptionsFieldNames } from 'type/editor-form';

import { EditorOptionsButtonsSx } from './styles';

const OptionButtons = ({
  activeTab,
  handleActiveTab,
}: {
  activeTab: string | null;
  handleActiveTab: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: EditorOptionsFieldNames | null
  ) => void;
}) => (
  <ToggleButtonGroup
    value={activeTab}
    exclusive
    onChange={handleActiveTab}
    aria-label="change option editor"
    sx={EditorOptionsButtonsSx['buttons-group']}
  >
    <ToggleButton
      value="variables"
      aria-label="variables"
      sx={EditorOptionsButtonsSx.button}
    >
      Variables
    </ToggleButton>
    <ToggleButton
      value="headers"
      aria-label="headers"
      sx={EditorOptionsButtonsSx.button}
    >
      Headers
    </ToggleButton>
  </ToggleButtonGroup>
);

export default OptionButtons;
