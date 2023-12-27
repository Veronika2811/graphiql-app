import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { EDITOR_FORM_DEFAULT_VALUES } from 'constants/editor-form';
import { getData } from 'service/getData';
import { EditorGraphQL } from 'type/editor-form';

import EditorMain from 'components/editor-main';
import EditorOptions from 'components/editor-options';

import { EditorFormStyle } from './styles';

const EditorForm = ({ endpoint }: { endpoint: string }) => {
  const form: UseFormReturn<EditorGraphQL, UseFormProps> =
    useForm<EditorGraphQL>({
      defaultValues: EDITOR_FORM_DEFAULT_VALUES,
    });

  // eslint-disable-next-line consistent-return
  const onSubmit = async (data: EditorGraphQL) => {
    const { request, variables } = data;

    if (!request) return console.error('Enter your request');

    const res = await getData(endpoint, request, variables);

    form.setValue('request', JSON.stringify(res, undefined, 2));

    // return true; // Expected to return a value at the end of async arrow function.eslintconsistent-return
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        style={EditorFormStyle.form as React.CSSProperties}
      >
        <EditorMain />

        <EditorOptions />
      </form>
    </FormProvider>
  );
};

export default EditorForm;
