import { FormEvent, useRef } from 'react';
import { Button, TextField } from '@mui/material';

import { searchBarSx } from './SearchBarSx.styles';

const SearchBar = ({
  endpoint,
  setEndpoint,
}: {
  endpoint: string;
  setEndpoint: React.Dispatch<React.SetStateAction<string>>;
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
