import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useSnackbar } from 'context/snackbar-provider';
import { useLocale } from 'internationalization/useLocale';
import { useAppDispatch } from 'store/hooks';
import { setStateDocsDrawer } from 'store/slices/documentation';

import { searchBarSx } from './styles';

interface SearchBarProps {
  endpoint: string | undefined;
  setEndpoint: React.Dispatch<React.SetStateAction<string | undefined>>;
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
  const dispatch = useAppDispatch();

  const onSubmit = (data: DefaultValuesForm) => {
    const { endpoint: url } = data;

    dispatch(setStateDocsDrawer(false));

    if (!url) {
      setEndpoint(undefined);
      return openSnackbar(translation.editor_message_missing_URL, 'error');
    }

    return setEndpoint(url.trim());
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
