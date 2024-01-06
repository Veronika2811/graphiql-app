import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material';
import { AuthTextField } from 'ui/auth-text-field';

type PasswordFieldProps = TextFieldProps & {
  showPassword: boolean;
  handleTogglePassword: () => void;
};

export const PasswordField = ({
  showPassword,
  handleTogglePassword,
  margin,
  required,
  fullWidth,
  id,
  label,
  variant,
  error,
  helperText,
  InputProps,
}: PasswordFieldProps) => (
  <AuthTextField
    margin={margin}
    required={required}
    fullWidth={fullWidth}
    id={id}
    label={label}
    variant={variant}
    error={error}
    helperText={helperText}
    type={showPassword ? 'text' : 'password'}
    autoComplete="off"
    InputProps={{
      ...InputProps,
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            onClick={handleTogglePassword}
            edge="end"
            color="primary"
            aria-label="Visibility Password"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);

export const usePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return { showPassword, setShowPassword, handleTogglePassword };
};
