import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import authService from 'api/apiAuthFirebase';
import { ROOT } from 'shared/constants/elements';
import { DIC_ERROR_API, SUCCESS } from 'shared/constants/errors';
import { findNextText } from 'utils/findNextText';
import { getFieldByKey } from 'utils/getFieldByKey';
import { FormData, shemaSignUp } from 'validation/shemaSignUp';

import { AuthTextField } from 'components/AuthTextField';
import { PasswordField, usePassword } from 'components/PasswordFiled';
import { useSnackbar } from 'components/SnackbarProvider';
import { SubmitButton } from 'components/SubmitButton';

export const SignUpForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({
    resolver: yupResolver(shemaSignUp, { strict: true }),
    mode: 'onBlur',
  });
  const { showPassword, handleTogglePassword } = usePassword();
  const { openSnackbar } = useSnackbar();

  const onSubmit = async (formData: FormData) => {
    setSubmitDisabled(true);
    try {
      const isEmailExist = await authService.checkEmail(formData.email);
      if (isEmailExist) {
        setError('email', {
          type: 'manual',
          message: 'Email is already taken',
        });
        setSubmitDisabled(false);
        return;
      }
      await authService.registerUser(formData);
      openSnackbar(SUCCESS.SIGN_UP, 'success');
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
        label={ROOT.SIGN_UP_FORM.LABEL_NAME}
        variant="outlined"
        error={Boolean(errors.name)}
        helperText={errors.name && errors.name.message}
        inputProps={register(ROOT.SIGN_UP_FORM.FILED_NAME)}
      />
      <AuthTextField
        margin="dense"
        required
        fullWidth
        id="email"
        label={ROOT.SIGN_UP_FORM.LABEL_LOGIN}
        variant="outlined"
        error={Boolean(errors.email)}
        helperText={errors.email && errors.email.message}
        inputProps={register(ROOT.SIGN_UP_FORM.FILED_LOGIN)}
      />
      <PasswordField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="password"
        label={ROOT.SIGN_UP_FORM.LABEL_PASSWORD}
        variant="outlined"
        error={Boolean(errors.password)}
        helperText={errors.password && errors.password.message}
        InputProps={register(ROOT.SIGN_UP_FORM.FILED_PASSWORD)}
        showPassword={showPassword}
        handleTogglePassword={handleTogglePassword}
      />
      <PasswordField
        margin="dense"
        required
        fullWidth
        type={showPassword ? 'text' : 'password'}
        id="confirmPassword"
        label={ROOT.SIGN_UP_FORM.LABEL_CONFIRM_PASSWORD}
        variant="outlined"
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword && errors.confirmPassword.message}
        InputProps={register(ROOT.SIGN_UP_FORM.FILED_CONFIRM_PASSWORD)}
        showPassword={showPassword}
        handleTogglePassword={handleTogglePassword}
      />
      <SubmitButton
        submitDisabled={submitDisabled}
        isValid={isValid}
        nameButton={ROOT.SIGN_UP_FORM.BUTTON}
      />
    </form>
  );
};
