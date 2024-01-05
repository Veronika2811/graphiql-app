import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import {
  EDITOR_FORM_DEFAULT_VALUES,
  EDITOR_MESSAGES,
} from 'constants/editor-form';
import { useGetSchemeQuery } from 'service/api';
import { getData } from 'service/getData';
import { EditorGraphQL } from 'types/editor-form';

import { EditorMain } from 'components/editor-main';
import { EditorOptions } from 'components/editor-options';
import { useSnackbar } from 'components/SnackbarProvider';

import { EditorFormStyle } from './styles';

export const EditorForm = ({ endpoint }: { endpoint: string }) => {
  const form: UseFormReturn<EditorGraphQL, UseFormProps> =
    useForm<EditorGraphQL>({
      defaultValues: EDITOR_FORM_DEFAULT_VALUES,
    });

  const { openSnackbar } = useSnackbar();

  const { isError } = useGetSchemeQuery(endpoint);

  const onSubmit = async (data: EditorGraphQL) => {
    const { request, variables, headers } = data;

    if (isError) return openSnackbar(EDITOR_MESSAGES.incorrect_URL, 'error');

    if (!request) return openSnackbar(EDITOR_MESSAGES.missing_request, 'error');

    const res = await getData(endpoint, request, variables, headers);

    form.setValue('response', JSON.stringify(res, undefined, 2));

    if (res.errors) return openSnackbar(EDITOR_MESSAGES.check_request, 'error');

    return openSnackbar(EDITOR_MESSAGES.successful_request, 'success');
  };

  return (
    <FormProvider {...form}>
      <EditorFormStyle onSubmit={form.handleSubmit(onSubmit)}>
        <EditorMain />

        <EditorOptions />
      </EditorFormStyle>
    </FormProvider>
  );
};
