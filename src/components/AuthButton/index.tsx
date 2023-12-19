import { Button, ButtonProps, styled } from '@mui/material';

const AuthButton = styled(Button)<ButtonProps>(({ theme }) => ({
  minWidth: '143px',
  padding: '10px 28px',
  textTransform: 'none',
  borderRadius: '10rem',
  backgroundColor: theme.palette.background.default,
}));

export default AuthButton;
