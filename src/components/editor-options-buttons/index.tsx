import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { EDITOR_TABS } from 'shared/constants/editor-form';
import { EditorOptionsFieldNames } from 'type/editor-form';

import { editorOptionsButtonsSx } from './styles';

interface OptionButtonsProps {
  activeTab: string | null;
  handleActiveTab: (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value: EditorOptionsFieldNames | null
  ) => void;
}

export const OptionButtons = ({
  activeTab,
  handleActiveTab,
}: OptionButtonsProps) => {
  const { translation } = useLocale();

  return (
    <ToggleButtonGroup
      value={activeTab}
      exclusive
      onChange={handleActiveTab}
      aria-label="change option editor"
      sx={editorOptionsButtonsSx['buttons-group']}
    >
      {EDITOR_TABS.map((el) => (
        <ToggleButton
          key={el}
          value={el}
          aria-label={el}
          sx={editorOptionsButtonsSx.button}
        >
          {translation[el]}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
