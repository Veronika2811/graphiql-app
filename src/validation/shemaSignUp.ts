import * as Yup from 'yup';

import confirmPasswordValidation from './rules/confirmPassword.validation';
import emailValidation from './rules/email.validation';
import nameValidation from './rules/name.validation';
import passwordValidation from './rules/password.validation';

const shemaSignUp = Yup.object().shape({
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
});

export default shemaSignUp;

export type FormData = Yup.InferType<typeof shemaSignUp>;
