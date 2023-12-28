import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { EDITOR_FORM_DEFAULT_VALUES } from 'constants/editor-form';
import { getData } from 'service/getData';
import { EditorGraphQL } from 'type/editor-form';

import { EditorMain } from 'components/editor-main';
import { EditorOptions } from 'components/editor-options';

import { EditorFormStyle } from './styles';

export const EditorForm = ({ endpoint }: { endpoint: string }) => {
  const form: UseFormReturn<EditorGraphQL, UseFormProps> =
    useForm<EditorGraphQL>({
      defaultValues: EDITOR_FORM_DEFAULT_VALUES,
    });

  const onSubmit = async (data: EditorGraphQL) => {
    const { request, variables, headers } = data;

    if (!request) return console.error('Enter your request'); // FIXME:Error or warning snackbar

    const res = await getData(endpoint, request, variables, headers);

    form.setValue('request', JSON.stringify(res, undefined, 2));

    return console.error('Success'); // FIXME:Success snackbar
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
