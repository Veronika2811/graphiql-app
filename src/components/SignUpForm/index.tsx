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

import ROOT from '../../constants/constants';
import shemaSignUp, { FormData } from '../../validation/shemaSignUp';
import AuthButton from '../AuthButton';
import AuthTextField from '../AuthTextField';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignUp),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const onSubmit = () => {};

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
      </form>
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <AuthButton type="submit" variant="outlined" disabled={!isValid}>
          {ROOT.SIGN_IN.BUTTON}
        </AuthButton>
      </Box>
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
