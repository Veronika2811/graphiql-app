import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment } from '@mui/material';
import authService from 'api/apiAuthFirebase';
import { ROOT } from 'shared/constants/elements';
import { DIC_ERROR_API, SUCCESS } from 'shared/constants/errors';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import { FormData, shemaSignIn } from 'validation/shemaSignIn';

import { AuthButton } from 'components/AuthButton';
import { AuthTextField } from 'components/AuthTextField';
import { useSnackbar } from 'components/SnackbarProvider';

export const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { openSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignIn),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = async (formData: FormData) => {
    try {
      await authService.signIn(formData);
      openSnackbar(SUCCESS.SIGN_IN, 'success');
    } catch (error) {
      if (error instanceof Error) {
        const messageError = getFieldByKey(
          DIC_ERROR_API,
          findNextText(error.message, 'auth/')
        );
        openSnackbar(messageError, 'error');
      }
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthTextField
        margin="dense"
        required
        fullWidth
        id="email"
        label={ROOT.SIGN_IN_FORM.LABEL_LOGIN}
        variant="outlined"
        error={Boolean(errors.email)}
        helperText={errors.email && errors.email.message}
        inputProps={register('email')}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="password"
        label={ROOT.SIGN_IN_FORM.LABEL_PASSWORD}
        variant="outlined"
        error={Boolean(errors.password)}
        helperText={errors.password && errors.password.message}
        InputProps={{
          ...register('password'),
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
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <AuthButton type="submit" variant="outlined" disabled={!isValid}>
          {ROOT.SIGN_IN_FORM.BUTTON}
        </AuthButton>
      </Box>
    </form>
  );
};
