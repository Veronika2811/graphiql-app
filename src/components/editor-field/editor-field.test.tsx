import { FormProvider, useForm } from 'react-hook-form';

import { renderWithProviders } from '../../renderWithProviders';

import { EditorField } from '.';

describe('EditorField component', () => {
  it('should renders correctly EditorField component', async () => {
    const CustomEditorField = () => {
      const methods = useForm();

      return (
        <FormProvider {...methods}>
          <EditorField name="response" />
        </FormProvider>
      );
    };

    const container = renderWithProviders(<CustomEditorField />);

    expect(container).toMatchSnapshot();
  });
});
