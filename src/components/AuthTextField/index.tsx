import { alpha, styled, TextField, TextFieldProps } from '@mui/material';

export const AuthTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiFormLabel-root, & .MuiInputBase-root': {
    color: theme.palette.primary.main,
    fontStyle: 'normal',
  },
  '& .MuiFormLabel-root': {
    left: '13px',
    fontSize: '1rem',
  },
  '& .MuiInputBase-root': {
    fontSize: '1.4rem',
    backgroundColor: theme.palette.background.default,
    borderRadius: '10px',
    borderColor: alpha('#FFC0CB1A', 0.1),
    input: {
      padding: '11px 30px',
    },
  },
  '&.MuiFormControl-marginDense': {
    marginBottom: '30px',
  },
  '& .MuiFormHelperText-root': {
    fontSize: '1rem',
    fontWeight: 400,
  },
}));
