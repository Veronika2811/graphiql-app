import {
  FormProvider,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { useSnackbar } from 'context/snackbar-provider';
import { useLocale } from 'internationalization/useLocale';
import { getData } from 'service/getData';
import { EDITOR_FORM_DEFAULT_VALUES } from 'shared/constants/editor-form';
import { EditorGraphQL } from 'types/editor-form';

import { EditorMain } from 'components/editor-main';
import { EditorOptions } from 'components/editor-options';

import { getPrettifyString } from './prettify/getPrettifyString';
import { EditorFormStyle } from './styles';

interface EditorFormProps {
  endpoint: string | undefined;
  isError: boolean;
}

export const EditorForm = ({ endpoint, isError }: EditorFormProps) => {
  const form: UseFormReturn<EditorGraphQL, UseFormProps> =
    useForm<EditorGraphQL>({
      defaultValues: EDITOR_FORM_DEFAULT_VALUES,
    });

  const { openSnackbar } = useSnackbar();
  const { translation } = useLocale();

  const onSubmit = async (data: EditorGraphQL) => {
    const { request, variables, headers } = data;

    if (!endpoint)
      return openSnackbar(translation.editor_message_missing_URL, 'error');

    if (isError)
      return openSnackbar(translation.editor_message_incorrect_URL, 'error');

    if (!request)
      return openSnackbar(translation.editor_message_missing_request, 'error');

    const res = await getData(endpoint, request, variables, headers);

    form.setValue('response', JSON.stringify(res, undefined, 2));

    if (res.errors)
      return openSnackbar(translation.editor_message_check_request, 'error');

    return openSnackbar(
      translation.editor_message_successful_request,
      'success'
    );
  };

  const handleClick = () => {
    const valueField = form.getValues('request');
    const prettifyString = getPrettifyString(valueField);
    form.setValue('request', prettifyString);
  };

  return (
    <FormProvider {...form}>
      <EditorFormStyle onSubmit={form.handleSubmit(onSubmit)}>
        <EditorMain handleClick={handleClick} />

        <EditorOptions />
      </EditorFormStyle>
    </FormProvider>
  );
};
