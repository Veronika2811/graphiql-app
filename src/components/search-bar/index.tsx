import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { EDITOR_MESSAGES } from 'constants/editor-form';

import { useSnackbar } from 'components/SnackbarProvider';

import { searchBarSx } from './styles';

interface SearchBarProps {
  endpoint: string;
  setEndpoint: (query: string) => void;
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

  const onSubmit = (data: DefaultValuesForm) => {
    const { endpoint: url } = data;

    if (!url) openSnackbar(EDITOR_MESSAGES.missing_URL, 'error');

    setEndpoint(url.trim());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="URL API"
        defaultValue={endpoint}
        fullWidth
        InputProps={{
          endAdornment: (
            <Button variant="outlined" color="secondary" type="submit">
              Change Endpoint
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
