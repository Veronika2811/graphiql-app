import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import authService from 'api/apiAuthFirebase';
import { ROOT } from 'shared/constants/elements';
import { DIC_ERROR_API, SUCCESS } from 'shared/constants/errors';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import { FormData, shemaSignIn } from 'validation/shemaSignIn';

import { AuthButton } from 'components/AuthButton';
import { AuthTextField } from 'components/AuthTextField';
import { PasswordField, usePassword } from 'components/PasswordFiled';
import { useSnackbar } from 'components/SnackbarProvider';

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignIn),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });
  const { showPassword, handleTogglePassword } = usePassword();
  const { openSnackbar } = useSnackbar();

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
        inputProps={register(ROOT.SIGN_IN_FORM.FILED_LOGIN)}
      />
      <PasswordField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="password"
        label={ROOT.SIGN_IN_FORM.LABEL_PASSWORD}
        variant="outlined"
        error={Boolean(errors.password)}
        helperText={errors.password && errors.password.message}
        InputProps={register(ROOT.SIGN_IN_FORM.FILED_PASSWORD)}
        showPassword={showPassword}
        handleTogglePassword={handleTogglePassword}
      />
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <AuthButton type="submit" variant="outlined" disabled={!isValid}>
          {ROOT.SIGN_IN_FORM.BUTTON}
        </AuthButton>
      </Box>
    </form>
  );
};
