import { useController } from 'react-hook-form';
import { EditorFieldNames } from 'types/editor-form';

import { EditorFieldStyle } from './styles';

interface EditorFieldProps {
  name: EditorFieldNames;
  readOnly?: boolean;
}

export const EditorField = ({ name, readOnly = false }: EditorFieldProps) => {
  const controller = useController({ name });

  const onChangeEditor = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    controller.field.onChange(e.target.value);

  return (
    <EditorFieldStyle
      defaultValue={controller.field.value}
      readOnly={readOnly}
      onChange={onChangeEditor}
    />
  );
};
