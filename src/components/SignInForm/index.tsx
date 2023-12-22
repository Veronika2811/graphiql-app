import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  Typography,
} from '@mui/material';

import { useSnackbar } from 'components/SnackbarProvider';

import authService from '../../api/apiAuthFirebase';
import ROOT, { DIC_ERROR_API, SUCCESS } from '../../constants/constants';
import { findNextText } from '../../utils/findNextText';
import { getFieldByKey } from '../../utils/getFieldByKey';
import shemaSignIn, { FormData } from '../../validation/shemaSignIn';
import AuthButton from '../AuthButton';
import AuthTextField from '../AuthTextField';

const SignInForm = () => {
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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthTextField
          margin="dense"
          required
          fullWidth
          id="email"
          label={ROOT.SIGN_IN.LABEL_LOGIN}
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
          label={ROOT.SIGN_IN.LABEL_PASSWORD}
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
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <AuthButton type="submit" variant="outlined" disabled={!isValid}>
            {ROOT.SIGN_IN.BUTTON}
          </AuthButton>
        </Box>
      </form>
      <Typography
        variant="body1"
        component="p"
        align="center"
        sx={{ fontSize: '1rem' }}
      >
        {`${ROOT.SIGN_IN.MESSAGE} `}
        <Link href="/">{ROOT.SIGN_IN.LINK_TEXT}</Link>
      </Typography>
    </>
  );
};

export default SignInForm;
