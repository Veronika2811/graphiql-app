import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import authService from 'api/apiAuthFirebase';
import { useSnackbar } from 'context/snackbar-provider';
import { useGetDicErrorApi } from 'hooks/useGetDicErrorApi';
import { useLocale } from 'internationalization/useLocale';
import { AuthTextField } from 'ui/auth-text-field';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import { FormData, shemaSignUp } from 'validation/shemaSignUp';

import { SubmitButton } from 'components/auth-submit-button';
import { PasswordField, usePassword } from 'components/password-filed';

export const SignUpForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const { showPassword, handleTogglePassword } = usePassword();
  const { openSnackbar } = useSnackbar();
  const { translation } = useLocale();
  const DIC_ERROR_API = useGetDicErrorApi();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignUp, { strict: true }),
    mode: 'onBlur',
  });

  const onSubmit = async (formData: FormData) => {
    setSubmitDisabled(true);
    try {
      const isEmailExist = await authService.checkEmail(formData.email);
      if (isEmailExist) {
        setError('email', {
          type: 'manual',
          message: translation.auth_email_already_taken,
        });
        setSubmitDisabled(false);
        return;
      }
      await authService.registerUser(formData);
      openSnackbar(translation.auth_success_sign_up, 'success');
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthTextField
        margin="dense"
        required
        fullWidth
        id="name"
        label={translation.auth_name}
        variant="outlined"
        error={Boolean(errors.name)}
        helperText={
          errors.name && errors.name.message && translation[errors.name.message]
        }
        inputProps={register('name')}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        id="emailSignUp"
        label={translation.auth_email}
        variant="outlined"
        error={Boolean(errors.email)}
        helperText={
          errors.email &&
          errors.email.message &&
          translation[errors.email.message]
        }
        inputProps={register('email')}
      />
      <PasswordField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="passwordSignUp"
        label={translation.auth_password}
        variant="outlined"
        error={Boolean(errors.password)}
        helperText={
          errors.password &&
          errors.password.message &&
          translation[errors.password.message]
        }
        InputProps={register('password')}
        showPassword={showPassword}
        handleTogglePassword={handleTogglePassword}
      />
      <PasswordField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="confirmPassword"
        label={translation.auth_confirm_password}
        variant="outlined"
        error={Boolean(errors.confirmPassword)}
        helperText={
          errors.confirmPassword &&
          errors.confirmPassword.message &&
          translation[errors.confirmPassword.message]
        }
        InputProps={register('confirmPassword')}
        showPassword={showPassword}
        handleTogglePassword={handleTogglePassword}
      />
      <SubmitButton
        submitDisabled={submitDisabled}
        isValid={isValid}
        nameButton={translation.signUp}
      />
    </form>
  );
};
