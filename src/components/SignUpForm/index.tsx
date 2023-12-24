import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, IconButton, InputAdornment } from '@mui/material';
import authService from 'api/apiAuthFirebase';
import { DIC_ERROR_API, ROOT, SUCCESS } from 'constants/index';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import shemaSignUp, { FormData } from 'validation/shemaSignUp';

import AuthButton from 'components/AuthButton';
import AuthTextField from 'components/AuthTextField';
import { useSnackbar } from 'components/SnackbarProvider';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const { openSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignUp, { strict: true }),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  const onSubmit = async (formData: FormData) => {
    setSubmitDisabled(true);
    try {
      const isEmailAvailable = await authService.checkEmail(formData.email);
      if (isEmailAvailable) {
        setError('email', {
          type: 'manual',
          message: 'Email is already taken',
        });
      } else {
        await authService.registerUser(formData);
        openSnackbar(SUCCESS.SIGN_UP, 'success');
      }
    } catch (error) {
      if (error instanceof Error) {
        const messageError = getFieldByKey(
          DIC_ERROR_API,
          findNextText(error.message, 'auth/')
        );
        openSnackbar(messageError, 'error');
      }
    }
    setSubmitDisabled(false);
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
        id="name"
        label={ROOT.SIGN_UP_FORM.LABEL_NAME}
        variant="outlined"
        error={!!errors.name}
        helperText={errors.name && errors.name.message}
        inputProps={register('name')}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        id="email"
        label={ROOT.SIGN_UP_FORM.LABEL_LOGIN}
        variant="outlined"
        error={!!errors.email}
        helperText={errors.email && errors.email.message}
        inputProps={register('email')}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="password"
        label={ROOT.SIGN_UP_FORM.LABEL_PASSWORD}
        variant="outlined"
        error={!!errors.password}
        helperText={errors.password && errors.password.message}
        InputProps={{
          ...register('password'),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePassword}
                edge="end"
                color="primary"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="confirmPassword"
        label={ROOT.SIGN_UP_FORM.LABEL_CONFIRM_PASSWORD}
        variant="outlined"
        error={!!errors.confirmPassword}
        helperText={errors.confirmPassword && errors.confirmPassword.message}
        InputProps={{
          ...register('confirmPassword'),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleTogglePassword}
                edge="end"
                color="primary"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <AuthButton
          type="submit"
          variant="outlined"
          disabled={!isValid || submitDisabled}
        >
          {ROOT.SIGN_UP_FORM.BUTTON}
        </AuthButton>
      </Box>
    </form>
  );
};

export default SignUpForm;
