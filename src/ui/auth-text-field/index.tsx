import { alpha, styled, TextField, TextFieldProps } from '@mui/material';

export const AuthTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiFormLabel-root, & .MuiInputBase-root': {
    color: theme.palette.primary.main,
    fontStyle: 'normal',
  },
  '& .MuiFormLabel-root': {
    left: theme.spacing(1.6),
    fontSize: '1rem',
  },
  '& .MuiInputBase-root': {
    fontSize: '1.4rem',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1.3),
    borderColor: alpha('#FFC0CB1A', 0.1),
    input: {
      padding: theme.spacing(1.4, 3.8),
    },
  },
  '&.MuiFormControl-marginDense': {
    marginBottom: 30,
  },
  '& .MuiFormHelperText-root': {
    fontSize: '1rem',
    fontWeight: 400,
  },
  '& input:-webkit-autofill': {
    transitionDelay: '9999s',
    transitionProperty: 'background-color, color',
  },
}));
