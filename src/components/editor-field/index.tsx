import { CSSProperties } from 'react';
import { useController } from 'react-hook-form';
import { EditorFieldNames } from 'type/editor-form';

import { EditorFieldStyle } from './styles';

interface EditorFieldProps {
  name: EditorFieldNames;
  readOnly?: boolean;
}

export const EditorField = ({ name, readOnly = false }: EditorFieldProps) => {
  const controller = useController({ name });

  return (
    <textarea
      style={EditorFieldStyle.textarea as CSSProperties}
      defaultValue={controller.field.value}
      readOnly={readOnly}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
        controller.field.onChange(e.target.value);
      }}
    />
  );
};
