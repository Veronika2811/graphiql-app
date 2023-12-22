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

import authService from '../../api/apiAuthFirebase';
import ROOT, { DIC_ERROR_API } from '../../constants/constants';
import { findNextText } from '../../utils/findNextText';
import { getFieldByKey } from '../../utils/getFieldByKey';
import shemaSignUp, { FormData } from '../../validation/shemaSignUp';
import AuthButton from '../AuthButton';
import AuthTextField from '../AuthTextField';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
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
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(
          'signUp',
          getFieldByKey(DIC_ERROR_API, findNextText(error.message, 'auth/'))
        );
      }
    }
    setSubmitDisabled(false);
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
          id="name"
          label={ROOT.SIGN_UP.LABEL_NAME}
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
          label={ROOT.SIGN_UP.LABEL_LOGIN}
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
          label={ROOT.SIGN_UP.LABEL_PASSWORD}
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
          label={ROOT.SIGN_UP.LABEL_CONFIRM_PASSWORD}
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
        <Link href="/">{ROOT.SIGN_UP.LINK_TEXT}</Link>
      </Typography>
    </>
  );
};

export default SignUpForm;
