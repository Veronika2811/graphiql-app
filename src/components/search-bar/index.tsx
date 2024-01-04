import { FormEvent, useRef } from 'react';
import { Button, TextField } from '@mui/material';

import { searchBarSx } from './styles';

const SearchBar = ({
  endpoint,
  setEndpoint,
}: {
  endpoint: string;
  setEndpoint: (query: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputRef.current) return;

    if (inputRef.current) {
      setEndpoint(inputRef.current.value.trim());
    }
  };

  return (
    <TextField
      label="URL API"
      defaultValue={endpoint}
      inputRef={inputRef}
      fullWidth
      InputProps={{
        endAdornment: (
          <Button onClick={handleSubmit} variant="outlined" color="secondary">
            Change Endpoint
          </Button>
        ),
      }}
      autoFocus
      sx={searchBarSx['search-bar']}
    />
  );
};

export default SearchBar;
