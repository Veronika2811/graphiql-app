import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import authService from 'api/apiAuthFirebase';
import { useSnackbar } from 'context/snackbar-provider';
import { useGetDicErrorApi } from 'hooks/useGetDicErrorApi';
import { useSubmit } from 'hooks/useSubmit';
import { useLocale } from 'internationalization/useLocale';
import { AuthTextField } from 'ui/auth-text-field';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import { FormData, shemaSignIn } from 'validation/shemaSignIn';

import { SubmitButton } from 'components/auth-submit-button';
import { PasswordField, usePassword } from 'components/password-filed';

export const SignInForm = () => {
  const { submitDisabled, setSubmitDisabled } = useSubmit();
  const { showPassword, handleTogglePassword } = usePassword();
  const { openSnackbar } = useSnackbar();
  const { translation } = useLocale();
  const DIC_ERROR_API = useGetDicErrorApi();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignIn),
    mode: 'onBlur',
  });

  const onSubmit = async (formData: FormData) => {
    setSubmitDisabled(true);
    try {
      await authService.signIn(formData);
      openSnackbar(translation.auth_success_sign_in, 'success');
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
        id="emailSignIn"
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
        id="passwordSignIn"
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
      <SubmitButton
        submitDisabled={submitDisabled}
        isValid={isValid}
        nameButton={translation.signIn}
      />
    </form>
  );
};
