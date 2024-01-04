import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { EDITOR_MESSAGES } from 'constants/editor-form';
import { useLocale } from 'internationalization/useLocale';

import { useSnackbar } from 'components/SnackbarProvider';

import { searchBarSx } from './styles';

interface SearchBarProps {
  endpoint: string;
  setEndpoint: React.Dispatch<React.SetStateAction<string>>;
}

interface DefaultValuesForm {
  endpoint: string;
}

export const SearchBar = ({ endpoint, setEndpoint }: SearchBarProps) => {
  const { register, handleSubmit } = useForm<DefaultValuesForm>({
    defaultValues: {
      endpoint,
    },
  });

  const { openSnackbar } = useSnackbar();

  const { translation } = useLocale();

  const onSubmit = (data: DefaultValuesForm) => {
    const { endpoint: url } = data;

    if (!url) openSnackbar(EDITOR_MESSAGES.missing_URL, 'error');

    setEndpoint(url.trim());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={translation.editor_search_bar_label}
        defaultValue={endpoint}
        fullWidth
        InputProps={{
          endAdornment: (
            <Button variant="outlined" color="secondary" type="submit">
              {translation.editor_button_change_endpoint}
            </Button>
          ),
        }}
        autoFocus
        sx={searchBarSx['search-bar']}
        {...register('endpoint')}
      />
    </form>
  );
};
