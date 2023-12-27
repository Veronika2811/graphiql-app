import { CSSProperties } from 'react';
import { useController } from 'react-hook-form';
import { EditorFieldNames } from 'type/editor-form';

import { EditorFieldStyle } from './styles';

const EditorField = ({
  name,
  readOnly = false,
}: {
  name: EditorFieldNames;
  readOnly?: boolean;
}) => {
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

export default EditorField;
