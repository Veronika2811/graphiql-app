import { Button, ButtonProps, styled } from '@mui/material';

export const AuthButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: '5.6em',
  padding: '0.5em 1.4em',
  fontSize: '1.2rem',
  textTransform: 'none',
  borderRadius: '10rem',
  backgroundColor: theme.palette.background.default,
}));
